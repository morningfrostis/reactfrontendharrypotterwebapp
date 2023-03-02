/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SpellCard from "../../components/Spell Card";
import { getSpells, Spell, syncSpells } from "../../services/api/spells";
// import Navbar from "../../components/Navbar";
import { App, Container } from "./styles";

const Edit: FC = () => {
  // const [data, setData] = useState<Character[]>([]);
  const [spellsList, setSpellsList] = useState<Spell[]>([]);
  const navigate = useNavigate();
  const params = useParams();

  const getSpellsList = useCallback(async () => {
    const spells = await getSpells();
    setSpellsList(spells);
  }, []);

  useEffect(() => {
    getSpellsList();
  }, [getSpellsList]);

  const { id } = params;
  const filteredItems = spellsList.filter((item) => item.spellId === id);

  return (
    <App>
      <Navbar />
      <Container>
        {filteredItems.map((spell, index) => (
          <SpellCard
            key={index}
            spellId={spell.spellId}
            name={spell.name}
            description={spell.description}
          />
        ))}
      </Container>
    </App>
  );
};

export default memo(Edit);
