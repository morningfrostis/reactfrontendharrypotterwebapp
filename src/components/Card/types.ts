import { ReactNode } from "react"

export type Props = {
    // type?: 'list' | 'details'
     onClick?: (id:string) => void
    // children?: ReactNode
    name: string;
    house: string;
    image: string;
    id?:string

        
}