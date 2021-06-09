import { DOMParser } from 'xmldom';
import Environment from './Environment';
import {
  getStartBlock,
  getNextBlock,
  getBlockId,
  getBlockType,
  stringifyBlock
} from './blockUtils';
import { defineBlocks } from './blocks/defineBlocks';
import { IBlockHandler } from './blocks/IBlockHandler';

export type InterpreterEvent =
  | { type: 'STATUS_RUNNING' }
  | { type: 'STATUS_STOPPED' }
  | { type: 'CURRENT_BLOCK', id: string | null };

type EventListener = (event: InterpreterEvent) => void;

export default class Interpreter {
  private environment: Environment
  private program: Document | null
  private currentBlock: Element | null
  private handlers: Map<string, IBlockHandler>
  private eventListener: EventListener

  constructor(environment: Environment) {
    this.environment = environment;
    this.program = null;
    this.currentBlock = null;
    this.handlers = defineBlocks();
    this.eventListener = () => {};
  }

  setEventListener(listener: EventListener) {
    this.eventListener = listener;
  }

  setProgram(programText: string) {
    console.log('setting program:');
    console.log(programText);
    console.log('');

    const program = new DOMParser().parseFromString(
      programText,
      'text/xml'
    );
    this.program = program;
    this.currentBlock = getStartBlock(program);
  }

  async run() {
    console.log('run()');

    this.emitEvent({ type: 'STATUS_RUNNING' });

    while (this.currentBlock) {
      await this.tick();
    }

    this.emitEvent({ type: 'CURRENT_BLOCK', id: null });
    this.emitEvent({ type: 'STATUS_STOPPED' });
  }

  async tick() {
    if (!this.currentBlock) {
      throw new Error('No current block');
    }

    console.log(`Interpreter.tick(): ${stringifyBlock(this.currentBlock)}`);

    const id = getBlockId(this.currentBlock);
    console.log(`  id: ${id}`);

    const type = getBlockType(this.currentBlock);
    const handler = this.handlers.get(type);
    if (!handler) {
      throw new Error(`No handler defined for block type "${type}"`);
    }

    this.emitEvent({ type: 'CURRENT_BLOCK', id });
    await handler.evaluate(this.currentBlock, this.environment);

    this.currentBlock = getNextBlock(this.currentBlock);

    console.log('');
  }

  private emitEvent(event: InterpreterEvent) {
    this.eventListener(event);
  }
}
