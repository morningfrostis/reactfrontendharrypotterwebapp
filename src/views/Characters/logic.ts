import {useCallback, useEffect, useState } from "react";
import type { Character } from "../../models/character";
import {
  getCharacters,
  removeCharacter,
  syncCharacters,
} from "../../services/api/characters";
import { useNavigate } from "react-router-dom";


const useLogic = () => {
  const [characters, setCharacter] = useState<Character[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();


  const handleGetCharactersList = useCallback(async () => {
    setIsLoading(true)
    const characters = await getCharacters();
    setCharacter(characters); 
    setIsLoading(false)
  }, []);

  // const handleRemoveCharacter = useCallback(async (id: string) => {
  //   setIsLoading(true);
  //   await removeCharacter(id);
  //   setCharacter((prev) =>
  //     prev.filter((character) => character.id !== id)
  //   );
  //   setIsLoading(false);
    
  // }, []);

  const handleSyncCharacters = useCallback(async () => {
    setIsLoading(true);
    await syncCharacters();
    await handleGetCharactersList()
    setIsLoading(false);
  }, [handleGetCharactersList]);

  const goToDetails = useCallback(
    (id: string) => {
      navigate(`/characterdetails/${id}`, { replace: true });
    },
    [navigate]
  );


  useEffect(() => {
    handleGetCharactersList();
  }, [handleGetCharactersList]);

  return {
    handleGetCharactersList,
    syncCharacters,
    handleSyncCharacters,
    // handleRemoveCharacter,
    isloading,
    characters,
    goToDetails
  };
};

export default useLogic;
