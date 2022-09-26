
export function initAgamaPalette(PaletteProvider){
  const _getPaletteEntries = PaletteProvider.prototype.getPaletteEntries
  PaletteProvider.prototype.getPaletteEntries = function (element) {
    const entries = _getPaletteEntries.apply(this)
    delete entries['create.start-event']
    delete entries['create.intermediate-event']
    delete entries['create.end-event']
    delete entries['create.exlusive-gateway']
    delete entries['create.task']
    delete entries['create.service-task']
    delete entries['create.data-object']
    delete entries['create.data-store']
    delete entries['create.subprocess-expended']
    delete entries['create.group']
    delete entries['create.exclusive-gateway']
    delete entries['create.subprocess-expanded']
    delete entries['create.participant-expanded']
    return entries
  }
}


export function initDiagam(){
    return `<?xml version="1.0" encoding="UTF-8"?>
    <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="3.3.5">
      <bpmn:process id="Process_1" isExecutable="true">
      </bpmn:process>
      <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
        </bpmndi:BPMNPlane>
      </bpmndi:BPMNDiagram>
    </bpmn:definitions>`;
}