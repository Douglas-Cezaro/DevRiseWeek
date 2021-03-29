import React, { useState } from "react";
import { InputSectionLabel, Button } from "../../atoms";
import { Modal, Input } from "../../molecules";
import { FilterContainer, InputsRowContainer, InputsRowItem } from "./styles";
import { useHousesHooks } from "../../../services/hooks";
import { useHousesStore } from "../../../services/stores";

export const FilterModal = ({ onClose, visible }) => {
  const { onFilterHousesList } = useHousesHooks();
  const { setHousesList, setOffset } = useHousesStore();

  const [sizeMin, setSizeMin] = useState();
  const [sizeMax, setSizeMax] = useState();
  const [priceMin, setPriceMin] = useState();
  const [priceMax, setPriceMax] = useState();
  const [bedsMin, setBedsMin] = useState();
  const [bathsMin, setBathsMin] = useState();

  const onClickApply = () => {
    setHousesList([]);
    setOffset(0);
    onFilterHousesList({
      sizeMin,
      sizeMax,
      priceMin,
      priceMax,
      bedsMin,
      bathsMin,
    });
    onClose();
  };

  return (
    <Modal visible={visible} onClose={onClose} title="Filtrar">
      <FilterContainer>
        <InputSectionLabel mt={12} mb={6}>
          Tamanho
        </InputSectionLabel>
        <InputsRowContainer>
          <InputsRowItem>
            <Input
              value={sizeMin}
              onChangeText={(text) => setSizeMin(text)}
              keyboardType="numeric"
              label="Mínimo"
              placeholder="Ex: 77"
            />
          </InputsRowItem>
          <InputsRowItem>
            <Input
              value={sizeMax}
              onChangeText={(text) => setSizeMax(text)}
              keyboardType="numeric"
              label="Maxímo"
              placeholder="Ex: 200"
            />
          </InputsRowItem>
        </InputsRowContainer>
        <InputSectionLabel mt={12} mb={6}>
          Preço
        </InputSectionLabel>
        <InputsRowContainer>
          <InputsRowItem>
            <Input
              value={priceMin}
              onChangeText={(text) => setPriceMin(text)}
              keyboardType="numeric"
              label="Mínimo"
              placeholder="Ex: 500"
            />
          </InputsRowItem>
          <InputsRowItem>
            <Input
              value={priceMax}
              onChangeText={(text) => setPriceMax(text)}
              keyboardType="numeric"
              label="Maxímo"
              placeholder="Ex: 2000"
            />
          </InputsRowItem>
        </InputsRowContainer>
        <InputSectionLabel mt={12} mb={6}>
          Quartos
        </InputSectionLabel>
        <InputsRowContainer>
          <InputsRowItem>
            <Input
              value={bedsMin}
              onChangeText={(text) => setBedsMin(text)}
              keyboardType="numeric"
              label="Mínimo"
              placeholder="Ex: 2"
            />
          </InputsRowItem>
        </InputsRowContainer>
        <InputSectionLabel mt={12} mb={6}>
          Banheiros
        </InputSectionLabel>
        <InputsRowContainer>
          <InputsRowItem>
            <Input
              value={bathsMin}
              onChangeText={(text) => setBathsMin(text)}
              keyboardType="numeric"
              label="Mínimo"
              placeholder="Ex: 2"
            />
          </InputsRowItem>
        </InputsRowContainer>
      </FilterContainer>
      <Button onPress={onClickApply} mt={24}>
        Aplicar
      </Button>
    </Modal>
  );
};
