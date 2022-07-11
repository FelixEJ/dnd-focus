import React from "react";
import styled from "styled-components";

import {
  Window,
  PageContent,
  SectionColumn,
  SectionRow,
  CardColumn,
  CardRow,
  CardItem,
  Label,
  BotButton,
} from "../components/StyledPageComponents/pageStyling";

const FlexContainer = styled.div`
  text-align: center;
  z-index: 1;
  width: 99%;
  background-color: none;

  border-style: inset;
  border-radius: 10px;

  margin-top: 2px;
  margin-bottom: 2px;
`;

const Slot = styled.div`
  width: 30%;
  max-width: 195px;
  background-color: none;
  display: inline-block;
  margin: 1% 1% 1% 1%;
  float: left;
`;
const Box = styled.div`
  width: 30%;
  max-width: 400px;
  background-color: none;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const Numbers = styled.p`
  font-size: 2.2em;
  margin: 0;
  text-transform: uppercase;
`;
const Title = styled.p`
  margin: 0;
  font-size: 0.9em;
  text-decoration: underline;
  text-transform: uppercase;
`;

const Magic = ({ character, onCharacterChange }) => {
  return (
    <CardColumn>
      {character.magic.ability !== "" && (
        <>
          <FlexContainer>
            <Box>
              <Title>Spellcasting Ability</Title>
              <Numbers>{character.magic.ability}</Numbers>
            </Box>
            <Box>
              <Title>Spell Attack Bonus</Title>
              <Numbers>+{character.magic.spell_attack_mod}</Numbers>
            </Box>

            <Box>
              <Title>Spell Save DC</Title>
              <Numbers>{character.magic.save_dc}</Numbers>
            </Box>
          </FlexContainer>
          {character.magic.cantrips_known !== 0 && (
            <FlexContainer>
              <Box>
                <Title>Cantrips Known</Title>
                <Numbers>{character.magic.cantrips_known}</Numbers>
              </Box>
              <Box>
                <Title>Prepared/known Spells</Title>
                <Numbers>{character.magic.spells_known}</Numbers>
              </Box>
              <Box>
                <Title>Concentrating</Title>
                <input
                  type="checkbox"
                  id="magic.concentrating"
                  name="magic.concentrating"
                  checked={character.magic.concentrating}
                  onChange={onCharacterChange}
                />
              </Box>
            </FlexContainer>
          )}
          <FlexContainer>
            {character.spellslots.first !== 0 && (
              <>
                {/* <h4>Spell Slots</h4> */}

                <Slot>
                  {character.spellslots.first > 0 ? (
                    <div>
                      <Title>1st:</Title>
                      <Numbers>
                        <input
                          type="number"
                          max={character.spellslots.first}
                          min="0"
                          id="spellslots.first_remaining"
                          name="spellslots.first_remaining"
                          value={character.spellslots.first_remaining}
                          onChange={onCharacterChange}
                          style={{ width: 50 }}
                          display="none"
                        />
                        /{character.spellslots.first}
                      </Numbers>
                    </div>
                  ) : null}
                </Slot>
                <Slot>
                  {character.spellslots.second > 0 ? (
                    <div>
                      <Title>2nd:</Title>
                      <Numbers>
                        <input
                          type="number"
                          max={character.spellslots.second}
                          min="0"
                          id="spellslots.second_remaining"
                          name="spellslots.second_remaining"
                          value={character.spellslots.second_remaining}
                          onChange={onCharacterChange}
                          style={{ width: 50 }}
                          display="none"
                        />
                        /{character.spellslots.second}
                      </Numbers>
                    </div>
                  ) : (
                    <br></br>
                  )}
                </Slot>
                <Slot>
                  {character.spellslots.third > 0 ? (
                    <div>
                      <Title>3rd:</Title>
                      <Numbers>
                        <input
                          type="number"
                          max={character.spellslots.third}
                          min="0"
                          id="spellslots.third_remaining"
                          name="spellslots.third_remaining"
                          value={character.spellslots.third_remaining}
                          onChange={onCharacterChange}
                          style={{ width: 50 }}
                          display="none"
                        />
                        /{character.spellslots.third}
                      </Numbers>
                    </div>
                  ) : null}
                </Slot>

                <Slot>
                  {character.spellslots.fourth > 0 && (
                    <div>
                      <Title>4th: </Title>
                      <Numbers>
                        <input
                          type="number"
                          max={character.spellslots.fourth}
                          min="0"
                          id="spellslots.fourth_remaining"
                          name="spellslots.fourth_remaining"
                          value={character.spellslots.fourth_remaining}
                          onChange={onCharacterChange}
                          style={{ width: 50 }}
                          display="none"
                        />
                        /{character.spellslots.fourth}
                      </Numbers>
                    </div>
                  )}
                </Slot>
                <Slot>
                  {character.spellslots.fifth > 0 && (
                    <div>
                      <Title>5th: </Title>
                      <Numbers>
                        <input
                          type="number"
                          max={character.spellslots.fifth}
                          min="0"
                          id="spellslots.fifth_remaining"
                          name="spellslots.fifth_remaining"
                          value={character.spellslots.fifth_remaining}
                          onChange={onCharacterChange}
                          style={{ width: 50 }}
                          display="none"
                        />
                        /{character.spellslots.fifth}
                      </Numbers>
                    </div>
                  )}
                </Slot>
                <Slot>
                  {character.spellslots.sixth > 0 && (
                    <div>
                      <Title>6th: </Title>
                      <Numbers>
                        <input
                          type="number"
                          max={character.spellslots.sixth}
                          min="0"
                          id="spellslots.sixth_remaining"
                          name="spellslots.sixth_remaining"
                          value={character.spellslots.sixth_remaining}
                          onChange={onCharacterChange}
                          style={{ width: 50 }}
                          display="none"
                        />
                        /{character.spellslots.sixth}
                      </Numbers>
                    </div>
                  )}
                </Slot>
                <Slot>
                  {character.spellslots.seventh > 0 && (
                    <div>
                      <Title>7th: </Title>
                      <Numbers>
                        <input
                          type="number"
                          max={character.spellslots.seventh}
                          min="0"
                          id="spellslots.seventh_remaining"
                          name="spellslots.seventh_remaining"
                          value={character.spellslots.seventh_remaining}
                          onChange={onCharacterChange}
                          style={{ width: 50 }}
                          display="none"
                        />
                        /{character.spellslots.seventh}
                      </Numbers>
                    </div>
                  )}
                </Slot>
                <Slot>
                  {character.spellslots.eighth > 0 && (
                    <div>
                      <Title>8th: </Title>
                      <Numbers>
                        <input
                          type="number"
                          max={character.spellslots.eighth}
                          min="0"
                          id="spellslots.eighth_remaining"
                          name="spellslots.eighth_remaining"
                          value={character.spellslots.eighth_remaining}
                          onChange={onCharacterChange}
                          style={{ width: 50 }}
                          display="none"
                        />
                        /{character.spellslots.eighth}
                      </Numbers>
                    </div>
                  )}
                </Slot>
                <Slot>
                  {character.spellslots.ninth > 0 && (
                    <div>
                      <Title>9th: </Title>
                      <Numbers>
                        <input
                          type="number"
                          max={character.spellslots.ninth}
                          min="0"
                          id="spellslots.ninth_remaining"
                          name="spellslots.ninth_remaining"
                          value={character.spellslots.ninth_remaining}
                          onChange={onCharacterChange}
                          style={{ width: 50 }}
                          display="none"
                        />
                        /{character.spellslots.ninth}
                      </Numbers>
                    </div>
                  )}
                </Slot>
              </>
            )}
          </FlexContainer>
        </>
      )}
    </CardColumn>
  );
};

export default Magic;
