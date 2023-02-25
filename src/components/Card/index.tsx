import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Container, Description, Image } from './styles'
import {Props} from './types'

const Card:FC<Props> = ({
    nasaId,
    sol,
    image,
    id
}) => {

    return(
        <Container>
            <Description>Id: {nasaId}</Description>
            <Description>Sol: {sol}</Description>
            <Image src={image}/>
            <Link to={`/details/${id}`}>View detalles</Link>
        </Container>
    )
}

export default Card