import callIcon from '../icons/call';
import launchIcon from '../icons/launch';
const MAX_NUMBER_OF_REPEAT = 3

export default class CustomPalette {
    constructor(bpmnFactory, create, elementFactory, palette, translate) {
      this.bpmnFactory = bpmnFactory;
      this.create = create;
      this.elementFactory = elementFactory;
      this.translate = translate;
      palette.registerProvider(this);
    }
  
    getPaletteEntries(element) {
      const {
        bpmnFactory,
        create,
        elementFactory,
        translate
      } = this;
  
      function createWhenOtherwiseTask(event) {
        const shape = elementFactory.createShape({ type: 'bpmn:Gateway' });
        create.start(event, shape);
      }

      function startFlow(event) {
        const shape = elementFactory.createShape({ type: 'bpmn:StartEvent' });
        create.start(event, shape);
      }
  
      function endFlow(event) {
        const shape = elementFactory.createShape({ type: 'bpmn:EndEvent' });
        create.start(event, shape);
      }

      function callJava(title) {
        return function(event) {
          const businessObject = bpmnFactory.create('bpmn:Task');
  
          businessObject.title = title;
  
          const shape = elementFactory.createShape({
            type: 'bpmn:Task',
            businessObject: businessObject
          });
  
          create.start(event, shape);
        };
      }

      function callJava(title) {
        return function(event) {
          const businessObject = bpmnFactory.create('bpmn:Task');
  
          businessObject.title = title;
  
          const shape = elementFactory.createShape({
            type: 'bpmn:Task',
            businessObject: businessObject
          });
  
          create.start(event, shape);
        };
      }

      function triggerFlow(title) {
        return function(event) {
          const businessObject = bpmnFactory.create('bpmn:Task');
  
          businessObject.title = title;
  
          const shape = elementFactory.createShape({
            type: 'bpmn:Task',
            businessObject: businessObject
          });
  
          create.start(event, shape);
        };
      }

      function createRepeatTask(maxNumberOfRepeat) {
        return function(event) {
          const businessObject = bpmnFactory.create('agama:Repeat');
  
          businessObject.maxNumberOfRepeat = maxNumberOfRepeat;
  
          const shape = elementFactory.createShape({
            type: 'bpmn:Task',
            businessObject: businessObject
          });
  
          create.start(event, shape);
        };
      }

      return {
        'create.start-flow': {
          group: 'activity',
          className: 'bpmn-icon-start-event-none',
          title: translate('Start Flow'),
          action: {
            dragstart: startFlow,
            click: startFlow
          }
        },
        'create.end-flow': {
          group: 'activity',
          className: 'bpmn-icon-end-event-none',
          title: translate('End Flow'),
          action: {
            dragstart: endFlow,
            click: endFlow
          }
        },
        'create.call-java': {
          group: 'activity',
          imageUrl: callIcon.dataURL,
          title: translate('Call (java)'),
          action: {
            dragstart: callJava('Call'),
            click: callJava('Call')
          }
        },
        'create.trigger-flow': {
          group: 'activity',
          imageUrl: launchIcon.dataURL,
          title: translate('Trigger flow'),
          action: {
            dragstart: triggerFlow('Trigger'),
            click: triggerFlow('Trigger')
          }
        },
        'create.when-otherwise': {
          group: 'activity',
          className: 'bpmn-icon-gateway-none',
          title: translate('Create When-Otherwise Block'),
          action: {
            dragstart: createWhenOtherwiseTask,
            click: createWhenOtherwiseTask
          }
        },
        'create.repeat': {
          group: 'activity',
          className: 'bpmn-icon-loop-marker',
          title: translate('Create Repeat Block'),
          action: {
            dragstart: createRepeatTask(MAX_NUMBER_OF_REPEAT),
            click: createRepeatTask(MAX_NUMBER_OF_REPEAT)
          }
        },
      }
    }
  }
  
  CustomPalette.$inject = [
    'bpmnFactory',
    'create',
    'elementFactory',
    'palette',
    'translate'
  ];