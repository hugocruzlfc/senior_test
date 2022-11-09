import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addFavorite } from "../../../../redux/states";
import { Checkbox } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AppStore } from "../../../../redux/store";

import { Person } from "../../../../models";

export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const pageSize = 5;

  const dispatch = useDispatch();
  const statePeople = useSelector((store: AppStore) => store.people);
  const stateFavorites = useSelector((store: AppStore) => store.favorites);

  const findPerson = (person: Person) =>
    !!stateFavorites.find((p) => p.id === person.id);

  const filterPerson = (person: Person) =>
    stateFavorites.filter((p) => p.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

  useEffect(() => {
    setSelectedPeople(stateFavorites);
  }, [stateFavorites]);

  const columns = [
    {
      field: "actions",
      type: "actions",
      sortable: false,
      headerName: "",
      minWidth: 50, ///+params.row.
      renderCell: (params: any) => (
        <>
          {
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
          }
        </>
      ),
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 150, ///+params.row.
      renderCell: (params: any) => <>{params.value}</>,
    },
    {
      field: "category",
      headerName: "Categories",
      flex: 1,
      minWidth: 150, ///+params.row.
      renderCell: (params: any) => <>{params.value}</>,
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      minWidth: 150, ///+params.row.
      renderCell: (params: any) => <>{params.value}</>,
    },
    {
      field: "levelOfHappiness",
      headerName: "Level of happines",
      flex: 1,
      minWidth: 150, ///+params.row.
      renderCell: (params: any) => <>{params.value}</>,
    },
  ];

  return (
    <DataGrid
      rows={statePeople}
      columns={columns}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row: any) => row.id}
    />
  );
};

export default PeopleTable;
