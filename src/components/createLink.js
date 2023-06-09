import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $nombre: String!,
    $trofeos: Int!,
    $trofeosinte: Int!,
    $trofeosloca: Int!,
    $continente: String!,
    $fundacion: Int!,
    $liga: String!,
    $pais: String!,
    $numerojuga: Int!,
    $presidente: String!,
  ) {
    createEquipo(nombre: $nombre, trofeos: $trofeos, trofeosinte: $trofeosinte, trofeosloca: $trofeosloca, continente: $continente, fundacion: $fundacion, liga: $liga, pais: $pais, numerojuga: $numerojuga, presidente: $presidente, ) {
      id
      nombre
      trofeos
      trofeosinte
      trofeosloca
      continente
      fundacion
      liga
      pais
      numerojuga
      presidente
    }
  }
`;

const CreateLink = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    nombre: '',
    trofeos: 0,
    trofeosinte: 0,
    trofeosloca: 0,
    continente: '',
    fundacion: 0,
    liga: '',
    pais: '',
    numerojuga: 0,
    presidente: ''
  });
    
    const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      nombre: formState.nombre,
      trofeos: formState.trofeos,
      trofeosinte: formState.trofeosinte,
      trofeosloca: formState.trofeosloca,
      continente: formState.continente,
      fundacion: formState.fundacion,
      liga: formState.liga,
      pais: formState.pais,
      numerojuga: formState.numerojuga,
      presidente: formState.presidente
    },
    onCompleted: () => navigate('/')
  });
  // ...


  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="A nombre for the link"
          />
          <input
            className="mb2"
            value={formState.trofeos}
            onChange={(e) =>
              setFormState({
                ...formState,
                trofeos: e.target.value
              })
            }
            type="number"
            placeholder="The trofeos for the link"
          />
          <input
            className="mb2"
            value={formState.trofeosinte}
            onChange={(e) =>
              setFormState({
                ...formState,
                trofeosinte: e.target.value
              })
            }
            type="number"
            placeholder="A trofeosinte for the link"
          />
          <input
            className="mb2"
            value={formState.trofeosloca}
            onChange={(e) =>
              setFormState({
                ...formState,
                trofeosloca: e.target.value
              })
            }
            type="number"
            placeholder="A trofeosloca for the link"
          />
          <input
            className="mb2"
            value={formState.continente}
            onChange={(e) =>
              setFormState({
                ...formState,
                continente: e.target.value
              })
            }
            type="text"
            placeholder="A continente for the link"
          />
          <input
            className="mb2"
            value={formState.fundacion}
            onChange={(e) =>
              setFormState({
                ...formState,
                fundacion: e.target.value
              })
            }
            type="number"
            placeholder="A fundacion for the link"
          />
          <input
            className="mb2"
            value={formState.liga}
            onChange={(e) =>
              setFormState({
                ...formState,
                liga: e.target.value
              })
            }
            type="text"
            placeholder="A liga for the link"
          />
          <input
            className="mb2"
            value={formState.pais}
            onChange={(e) =>
              setFormState({
                ...formState,
                pais: e.target.value
              })
            }
            type="text"
            placeholder="A pais for the link"
          />
          <input
            className="mb2"
            value={formState.numerojuga}
            onChange={(e) =>
              setFormState({
                ...formState,
                numerojuga: e.target.value
              })
            }
            type="number"
            placeholder="A numerojuga for the link"
          />
          <input
            className="mb2"
            value={formState.presidente}
            onChange={(e) =>
              setFormState({
                ...formState,
                presidente: e.target.value
              })
            }
            type="text"
            placeholder="A presidente for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;