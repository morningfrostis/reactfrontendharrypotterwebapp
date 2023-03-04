import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SpellCard from "../../components/Spell Card";
import { getSpells, SpellResponse } from "../../services/api/spells";
import { App, Container } from "./styles";

const SpellsDetails: FC = () => {
  const [spellList, setSpellList] = useState<SpellResponse[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigate = useNavigate();
  const params = useParams();

  const getSpellsList = useCallback(async () => {
    const spells = await getSpells();
    setSpellList(spells);
  }, []);

  useEffect(() => {
    getSpellsList();
  }, [getSpellsList]);

  const { spellId } = params;
  const filteredItems = spellList.filter((item) => item.spellId === spellId);
  return (
    <App>
      <Navbar type="details" />
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

export default memo(SpellsDetails);
