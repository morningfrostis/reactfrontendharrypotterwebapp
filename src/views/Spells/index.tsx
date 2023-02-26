import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SpellCard from "../../components/Spell Card";
import { getSpells, Spell, syncSpells } from "../../services/api/spells";
// import Navbar from "../../components/Navbar";
import { App, Container } from "./styles";

const Spells: FC = () => {
  // const [data, setData] = useState<Character[]>([]);
  const [spellsList, setSpellsList] = useState<Spell[]>([]);
  const navigate = useNavigate();

  const getSpellsList = useCallback(async () => {
    const spells = await getSpells();
    setSpellsList(spells);
    console.log(spellsList);
  }, []);
 
//   const syncData = useCallback(async () => {
//     await syncSpells();
//  }, []);


  useEffect(() => {
    console.log("entramos");
    getSpellsList();
  }, [getSpellsList]);

  const goToEdit = useCallback(
    (spellId: string) => {
      navigate(`/edit/${spellId}`, { replace: true });
    },
    [navigate]
  );

  return (
    <App>
      <Navbar />
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
