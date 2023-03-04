import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SpellCard from "../../components/Spell Card";
import {
  getSpells,
  removeSpells,
  SpellResponse,
  syncSpells,
} from "../../services/api/spells";
import {
  App,
  ButtonContainer,
  ButtonNext,
  ButtonPreview,
  Container,
  DeleteButton,
  SyncButton,
} from "./styles";

const Spells: FC = () => {
  const [spellsList, setSpellsList] = useState<SpellResponse[]>([]);
  const navigate = useNavigate();
  const [loading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const getSpellsList = useCallback(async () => {
    const spells = await getSpells();
    setSpellsList(spells);
  }, []);

  const syncData = useCallback(async () => {
    await syncSpells();
    setIsLoading(false);
    getSpellsList();
  }, []);

  const handleRemoveSpell = useCallback(async (id: string) => {
    setIsLoading(true);
    await removeSpells(id);
    setSpellsList((prev) => prev.filter((item) => item.id !== id));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getSpellsList();
  }, [getSpellsList]);

  const goToEdit = useCallback(
    (spellId: string) => {
      console.log("G TO DETAILS", spellId);
      navigate(`/spells/${spellId}`, { replace: true });
    },
    [navigate]
  );

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  if (loading) {
    return <h1>LOADING</h1>;
  }

  return (
    <App>
      <SyncButton onClick={syncData}>Sync Spells</SyncButton>
      <ButtonContainer>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </ButtonContainer>
      <Container>
        {spellsList
          .slice((page - 1) * 8, (page - 1) * 8 + 8)
          .map((spell, index) => (
            <div key={index}>
              <SpellCard
                spellId={spell.id}
                name={spell.name}
                description={spell.description}
                onClick={goToEdit}
              />
              <DeleteButton onClick={() => handleRemoveSpell(spell.id)}>
                DELETE
              </DeleteButton>
            </div>
          ))}
      </Container>
      <ButtonContainer>
        <ButtonPreview onClick={handlePrevPage}>Previous</ButtonPreview>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>
      </ButtonContainer>
    </App>
  );
};

export default memo(Spells);
