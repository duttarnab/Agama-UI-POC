import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
} from 'bpmn-js-properties-panel'
import PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider'
import Modeler from 'bpmn-js/lib/Modeler'
import CustomPalette from './customization';
import customModule from './customization'
import './styles/diagram-js.css'
import './styles/bpmn-embedded.css'
import './styles/App.css'
import './styles/properties-panel.css'
import { initDiagam, initAgamaPalette} from './diagram/Utils'


function App() {
  const [initialDiagram, setInitialDiagram] = useState(initDiagam)
  var modeler = {};
  useEffect(() => {
    if (initialDiagram.length > 0) {
       modeler = new Modeler({
        container: '#canvas',
        keyboard: {
          bindTo: window,
        },
        propertiesPanel: {
          parent: '#panel',
        },
        additionalModules: [
          customModule,
          BpmnPropertiesPanelModule,
          BpmnPropertiesProviderModule,
        ],
      })
      modeler
        .importXML(initialDiagram)
        .then(({ warnings }) => {
          if (warnings.length) {
            console.log('Warnings', warnings)
          }
          const canvas = modeler.get('modeling')
          canvas.setColor('CalmCustomerTask', {
            stroke: 'green',
            fill: 'yellow',
          })
        })
        .catch((err) => {
          console.log('error', err)
        })
    }
  })
  function fn(){
    const { xml } = modeler.saveXML({ format: true }, function(err, xml){
      alert('Diagram xml is printed on browser console.')
      console.log(xml)
    });
    
    //alert(xml)
  }
  initAgamaPalette(PaletteProvider)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Agama UI POC
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack direction="row" spacing={2}>
        <div id="canvas"></div>
        <div id="panel"></div>
        <div><Button onClick={fn}>Export</Button></div>
      </Stack>
      
    </Box>
  )
}

export default App
