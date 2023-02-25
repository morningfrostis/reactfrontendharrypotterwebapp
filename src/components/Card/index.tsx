import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Container, Description, Image } from './styles'
import {Props} from './types'

const Card:FC<Props> = ({
    name,
    house,
    image,
    id
}) => {

    return(
        <Container>
            <Image src={image}/>
            <Description> {name}</Description>
            <Description> {house}</Description>
            <Link to={`/details/${id}`}>View detalles</Link>
            <Description> {id}</Description>

        </Container>
    )
}

export default Card