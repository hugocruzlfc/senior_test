import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPeople } from "../../redux/states";

import { PeopleTable } from "./components";
import { People } from "../../data";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, [dispatch]);

  return <PeopleTable />;
};

export default Home;
