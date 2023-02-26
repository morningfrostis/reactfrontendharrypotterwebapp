import { FC, useCallback } from 'react'
import { Props } from './types'
import { useNavigate } from 'react-router-dom';
import { BackButton, SignoutButton, Tittle } from '../../components/Navbar/styles'
import { CustomNavbar } from './styles'



const Navbar: FC<Props> = ({type='list'}) => {

    const navigate = useNavigate()

    const goToBack = useCallback(() => {
        navigate('/home')
    }, [navigate])


    // const handleSignOut = async () => {
    //     try {
    //         console.log(auth)
    //         await auth.signOut();
    //         console.log(auth)
    //         window.localStorage.clear()
    //         navigate('/');
    //     } catch (error) {
    //         alert('Algo no fue bien')
    //     }
    // };

    return (
        <CustomNavbar>
            <Tittle>Harry Potter Web App</Tittle>
            {type === 'details' &&<BackButton onClick={goToBack}>🔙</BackButton>}
            {/* <SignoutButton onClick={handleSignOut}>LogOut</SignoutButton> */}
        </CustomNavbar>
    )
}

export default Navbar