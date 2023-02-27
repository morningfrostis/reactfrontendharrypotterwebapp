import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SpellCard from "../../components/Spell Card";
import { getSpells, Spell, syncSpells } from "../../services/api/spells";
// import Navbar from "../../components/Navbar";
import { App, Container, SyncButton } from "./styles";

const Spells: FC = () => {
  // const [data, setData] = useState<Character[]>([]);
  const [spellsList, setSpellsList] = useState<Spell[]>([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)


  const getSpellsList = useCallback(async () => {
    const spells = await getSpells();
    setSpellsList(spells);
    console.log(spellsList);
  }, []);
 
  const syncData = useCallback(async () => {
    await syncSpells();
    setLoading(false)
    getSpellsList();
 }, []);


  // useEffect(() => {
  //   console.log("entramos");
  //   getSpellsList();
  // }, [getSpellsList]);

  const goToEdit = useCallback(
    (spellId: string) => {
      navigate(`/edit/${spellId}`, { replace: true });
    },
    [navigate]
  );

  if(loading) {
    return(
      <h1>LOADING</h1>
    )
  }

  return (
    <App>
      <Navbar />
      <SyncButton onClick={syncData}>Sync Spells</SyncButton>  
      <Container>
        {spellsList.map((spell, index) => (
          <SpellCard
            key={index}
            spellId={spell.spellId}
            name={spell.name}
            description={spell.description}
            onClick={goToEdit}
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(Spells);
