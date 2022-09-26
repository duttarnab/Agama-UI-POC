const MAX_NUMBER_OF_REPEAT = 3

export default class CustomContextPad {
  constructor(bpmnFactory, config, contextPad, create, elementFactory, injector, translate) {
    this.bpmnFactory = bpmnFactory;
    this.create = create;
    this.elementFactory = elementFactory;
    this.translate = translate;

    if (config.autoPlace !== false) {
      this.autoPlace = injector.get('autoPlace', false);
    }

    contextPad.registerProvider(this);
  }

  getContextPadEntries(element) {
    const {
      autoPlace,
      bpmnFactory,
      create,
      elementFactory,
      translate
    } = this;

    function appendServiceTask(maxNumberOfRepeat) {
      return function(event, element) {
        if (autoPlace) {
          const businessObject = bpmnFactory.create('bpmn:Task');

          businessObject.maxNumberOfRepeat = maxNumberOfRepeat;

          const shape = elementFactory.createShape({
            type: 'bpmn:Task',
            businessObject: businessObject
          });

          autoPlace.append(element, shape);
        } else {
          appendServiceTaskStart(event, element);
        }
      };
    }

    function appendServiceTaskStart(maxNumberOfRepeat) {
      return function(event) {
        const businessObject = bpmnFactory.create('bpmn:Task');

        businessObject.maxNumberOfRepeat = maxNumberOfRepeat;

        const shape = elementFactory.createShape({
          type: 'bpmn:Task',
          businessObject: businessObject
        });

        create.start(event, shape, element);
      };
    }

    /*return {
      'append.repeat': {
        group: 'model',
        className: 'bpmn-icon-loop-marker',
        title: translate('Create Agama Repeat Block'),
        action: {
          click: appendServiceTask(MAX_NUMBER_OF_REPEAT),
          dragstart: appendServiceTaskStart(MAX_NUMBER_OF_REPEAT)
        }
      }
    };*/
    return function(entries) {
      delete entries["append.end-event"];
      delete entries['bpmn-replace']
      delete entries['append.gateway']
      delete entries['append.intermediate-event']
      delete entries['append.append-task']
    
      return entries;
    };
  }
}

CustomContextPad.$inject = [
  'bpmnFactory',
  'config',
  'contextPad',
  'create',
  'elementFactory',
  'injector',
  'translate'
];