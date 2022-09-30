import * as React from "react";
import Frontiers from "./frontiers";
import { FrontierCard } from "./components/Card";
import { Container, Grid } from "@chakra-ui/react";
export const App = () => {
  return (
    <Container pt={4}>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <FrontierCard
          name={"Victor Vadelius"}
          speciality={"Fullstack"}
          assignment={"Ericsson"}
          city={"Karlstad"}
          yearsAtForefront={2}
          yearsOfExperience={10}
          key={"🚀"}
          avatarUrl={"https://avatars.githubusercontent.com/u/4479126?v=4"}
        />
        <FrontierCard
          name={"Joakim Östelid"}
          speciality={"Fullstack"}
          assignment={"Ericsson"}
          city={"Karlstad"}
          yearsAtForefront={1}
          yearsOfExperience={7}
          key={"🚀"}
          hobbies={["Diverse"]}
          avatarUrl={
            "data:image/jpeg;base64,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"
          }
        />
        <FrontierCard
          name={"Micke Norling"}
          speciality={"Frontend"}
          assignment={"Avtalat"}
          city={"Stockholm"}
          yearsAtForefront={2}
          yearsOfExperience={16}
          key={"foo"}
          avatarUrl={
            "https://pbs.twimg.com/profile_images/651457615193632768/IEXWRuBJ_400x400.jpg"
          }
          hobbies={["Öl", "brädspel", "fjällvandring"]}
        />
        {/* Lägg till ett nytt <FrontierCard /> ovan. Eller uppdatera frontiers.ts */}
        {Frontiers.map((f) => (
          <FrontierCard key={f.name + f.city} {...f} />
        ))}
      </Grid>
    </Container>
  );
};
