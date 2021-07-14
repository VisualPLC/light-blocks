import Blockly, { Block } from 'blockly';

export function defineBlocks() {
  Blockly.Blocks['start'] = {
    init: function() {
      let block = this as Block;

      block.appendDummyInput()
          .appendField("when the program starts, do:");
      block.setNextStatement(true, null);
      block.setColour(230);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['loop_n_times'] = {
    init: function() {
      let block = this as Block;

      block.appendDummyInput()
          .appendField("loop");
      block.appendValueInput("REPEAT_TIMES")
          .setCheck("Number");
      block.appendDummyInput()
          .appendField("times do:");

      block.appendStatementInput("LOOP_BODY");

      block.setInputsInline(true);
      block.setPreviousStatement(true, null);
      block.setNextStatement(true, null);
      block.setColour(180);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['loop_forever'] = {
    init: function() {
      let block = this as Block;

      block.appendDummyInput()
          .appendField("loop forever do:");

      block.appendStatementInput("LOOP_BODY");

      block.setInputsInline(true);
      block.setPreviousStatement(true, null);
      block.setNextStatement(true, null);
      block.setColour(180);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['run_distinct_processes'] = {
    init: function() {
      let block = this as Block;

      block.appendDummyInput()
          .appendField("run logic for each light");
      block.appendStatementInput("PROCESS1")
          .appendField("light 1:");
      block.appendStatementInput("PROCESS2")
          .appendField("light 2:");
      block.appendStatementInput("PROCESS3")
          .appendField("light 3:");
      block.appendStatementInput("PROCESS4")
          .appendField("light 4:");

      block.setInputsInline(true);
      block.setPreviousStatement(true, null);
      block.setNextStatement(true, null);
      block.setColour(30);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['run_duplicate_processes'] = {
    init: function() {
      let block = this as Block;

      block.appendDummyInput()
          .appendField("run the same logic independently for each light");
      block.appendStatementInput("PROCESS")
          .appendField("do:");

      block.setInputsInline(true);
      block.setPreviousStatement(true, null);
      block.setNextStatement(true, null);
      block.setColour(30);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['set_color'] = {
    init: function() {
      let block = this as Block;
      block.appendDummyInput()
          .appendField("set color to");
      block.appendValueInput("COLOR")
          .setCheck("Color");
      block.setInputsInline(true);
      block.setPreviousStatement(true, null);
      block.setNextStatement(true, null);
      block.setColour(230);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['color_simple'] = {
    init: function() {
      let block = this as Block;
      block.appendDummyInput()
          .appendField("color:")
          .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
      block.setOutput(true, "Color");
      block.setColour(120);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['color_components'] = {
    init: function() {
      let block = this as Block;
      block.appendDummyInput()
          .appendField("color from components:");
      block.appendValueInput("HUE")
          .setCheck("Number")
          .appendField("H");
      block.appendValueInput("SATURATION")
          .setCheck("Number")
          .appendField("S");
      block.appendValueInput("BRIGHTNESS")
          .setCheck("Number")
          .appendField("B");
      block.setInputsInline(true);
      block.setOutput(true, "Color");
      block.setColour(120);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['light_on'] = {
    init: function() {
      let block = this as Block;
      block.appendDummyInput()
          .appendField("turn the light on");
      block.setPreviousStatement(true, null);
      block.setNextStatement(true, null);
      block.setColour(230);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['light_off'] = {
    init: function() {
      let block = this as Block;
      block.appendDummyInput()
          .appendField("turn the light off");
      block.setPreviousStatement(true, null);
      block.setNextStatement(true, null);
      block.setColour(230);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['wait'] = {
    init: function() {
      let block = this as Block;
      block.appendDummyInput()
        .appendField("wait for");

      block.appendValueInput("TIME")
        .setCheck("Number");

      block.appendDummyInput()
        .appendField("seconds");

      block.setPreviousStatement(true, null);
      block.setNextStatement(true, null);
      block.setColour(0);
      block.setTooltip("");
      block.setHelpUrl("");
    }
  };

  Blockly.Blocks['logic_and'] = {
    init: function() {
      let block = this as Block;

      block.appendValueInput("A")
        .setCheck("Boolean");

      block.appendDummyInput()
        .appendField("and");

      block.appendValueInput("B")
        .setCheck("Boolean");

      block.setColour(210);
      block.setTooltip("");
      block.setHelpUrl("");
      block.setInputsInline(true);
      block.setOutput(true, "Boolean");
    }
  };

  Blockly.Blocks['logic_or'] = {
    init: function() {
      let block = this as Block;

      block.appendValueInput("A")
        .setCheck("Boolean");

      block.appendDummyInput()
        .appendField("or");

        block.appendValueInput("B")
        .setCheck("Boolean");

      block.setColour(210);
      block.setTooltip("");
      block.setHelpUrl("");
      block.setInputsInline(true);
      block.setOutput(true, "Boolean");
    }
  };

  Blockly.Blocks['math_random_between'] = {
    init: function() {
      let block = this as Block;
      block.appendDummyInput()
        .appendField("random number between");

      block.appendValueInput("MIN")
        .setCheck("Number");

      block.appendDummyInput()
        .appendField("and");

        block.appendValueInput("MAX")
        .setCheck("Number");

      block.setColour(230);
      block.setTooltip("");
      block.setHelpUrl("");
      block.setInputsInline(true);
      block.setOutput(true, "Number");
    }
  };
}

