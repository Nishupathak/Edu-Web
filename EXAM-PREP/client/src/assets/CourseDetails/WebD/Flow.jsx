import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import nodes from './nodes'
import edges from './edges'

const Flow = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
    <ReactFlow 
      nodes={nodes}
      edges={edges}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
  </div>
  )
}

export default Flow