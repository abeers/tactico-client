import { Button, Col } from 'react-bootstrap'
import './Cell.css'

const Cell = ({value}) => (
    <Col className="gameCellWrapper" xs={4}>
        <Button className="gameCell">{value}</Button>
    </Col>
)

export default Cell
