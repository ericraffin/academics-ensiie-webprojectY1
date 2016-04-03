import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, Quote, Slide, Spectacle,
  TableHeaderItem, TableItem, TableRow, Table, Text
} from "../src";

import preloader from "../src/utils/preloader";
import createTheme from "../src/themes/default";
import Interactive from "../assets/interactive";

require("normalize.css");
require("../src/themes/default/index.css");

const images = {
  kitchen: require("../assets/inoviakitchen.jpg"),
  ensiielogo: require("../assets/Logo_ENSIIE.png"),
  team: require("../assets/team.jpg"),
  dome: require("../assets/dome.png"),
  crazy: require("../assets/crazy.jpg")
};
{/* kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")*/} 
preloader(images);

const theme = createTheme({
  primary: "#E8552F",
  secondary: "#FFFFFF",
  orange: "#E8552F"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          {/* HOME */} 
          <Slide transition={["slide", "fade"]} bgImage={images.kitchen.replace("/", "")} bgDarken={0.35}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Projet web ENSIIE
            </Heading>
            <Heading size={2}  caps textColor="orange">
              by Inovia
            </Heading>
            <Image src={images.ensiielogo.replace("/", "")} margin="60px auto 40px" height="150px"/>
          </Slide>


          {/* OBJECTIF */} 
          <Slide  transition={["slide", "fade"]} notes="">
            <Heading size={1} caps  margin="0 0 70px 0"  textColor="black" textFont="primary" >
              Objectif
            </Heading>
            <Appear fid="1">
            <Heading size={4}textColor="secondary" textFont="primary" >
              Apprendre à concevoir et développer des applications web en utilisant un serveur de bases de données
            </Heading>
            </Appear>
          </Slide>

          {/* EQUIPE  */} 
          <Slide  transition={["slide", "fade"]} notes="" bgImage={images.team.replace("/", "")} bgDarken={0.55}>
            <Heading size={1} caps  margin="0 0 70px 0"  textColor="orange" textFont="primary" >
              L'équipe
            </Heading>
            <List>
              <Appear><ListItem>Pierre Trouvé, ENSIIE 2010 </ListItem></Appear>
              <Appear><ListItem>Alan Adamik </ListItem></Appear>
              <Appear><ListItem>Eric Raffin, ENSIIE 2007 </ListItem></Appear>
            </List>
          </Slide>

          {/* SUJETS PROPOSES */} 
          <Slide  transition={["slide", "fade"]} notes="">
            <Heading size={1} caps  margin="0 0 70px 0"  textColor="black" textFont="primary" >
              Sujets proposés
            </Heading>
            <List>
              <Appear><ListItem>Plateforme de timeline photo pour soirée et événement</ListItem></Appear>
              <Appear><ListItem>Système de ranking de babyfoot, solo et équipe</ListItem></Appear>
              <Appear><ListItem>Arbre généalogique des parrainages inter promo à l’école</ListItem></Appear>
            </List>
          </Slide>

          {/* PROJET LIBRE */} 
          <Slide  transition={["slide", "fade"]} notes="">
            <Heading size={1} caps  margin="0 0 70px 0"  textColor="black" textFont="primary" >
              Projet libre
            </Heading>
            <List>
              <Appear><ListItem>Doit-être approuvé !</ListItem></Appear>
              <Appear><ListItem>Doit respecter les pré-requis</ListItem></Appear>
              <Appear><ListItem>Si c'est fun et utile c'est mieux</ListItem></Appear>
            </List>
          </Slide>


          {/* MUST HAVE */} 
          <Slide  transition={["slide", "fade"]} notes="">
            <Heading size={1} caps  margin="0 0 70px 0"  textColor="black" textFont="primary" >
              Must Have
            </Heading>
            <List>
              <Appear><ListItem>Une authentification et un compte admin</ListItem></Appear>
              <Appear><ListItem>Un profil utilisateur éditable</ListItem></Appear>
              <Appear><ListItem>Une base de données relationnelle : 3 tables, un join</ListItem></Appear>
              <Appear><ListItem>des INSERT, DELETE, UPDATE, SELECT</ListItem></Appear>
              <Appear><ListItem>Un CRUD (Create Read Update Delete)</ListItem></Appear>
            </List>
          </Slide>
            
          {/* TECHNO */} 
          <Slide  transition={["slide", "fade"]} notes="">
            <Heading size={1} caps  margin="0 0 70px 0"  textColor="black" textFont="primary" >
              TECH MUST HAVE ! 
            </Heading>
            <List>
              <Appear><ListItem>PHP5+</ListItem></Appear>
              <Appear><ListItem>PostgreSQL</ListItem></Appear>
              <Appear><ListItem>Javascript</ListItem></Appear>
              <Appear><ListItem>GIT (bisou ARiSE)</ListItem></Appear>
            </List>
          </Slide>

          {/* TECHNO 2 */} 
          <Slide  transition={["slide", "fade"]} notes="">
            <Heading size={1} caps  margin="0 0 70px 0"  textColor="black" textFont="primary" >
              TECH NICE TO HAVE ! 
            </Heading>
            <List>
              <Appear><ListItem>PHP7</ListItem></Appear>
              <Appear><ListItem>Zend Framework 2</ListItem></Appear>
              <Appear><ListItem>Du joli CSS</ListItem></Appear>
              <Appear><ListItem>API Rest</ListItem></Appear>
              <Appear><ListItem>Des tests automatisés</ListItem></Appear>
            </List>
          </Slide>

          {/* NOTATION*/} 
          <Slide  transition={["slide", "fade"]} notes="">
            <Heading size={1} caps  margin="0 0 70px 0"  textColor="black" textFont="primary" >
              Notation
            </Heading>
            <List>
              <Appear><ListItem>Par groupe</ListItem></Appear>
              <Appear><ListItem>Méthodo, Teamwork, présence</ListItem></Appear>
              <Appear><ListItem>Qualité technique</ListItem></Appear>
              <Appear><ListItem>Soutenance et rapport</ListItem></Appear>
            </List>
          </Slide>


          {/* CALENDRIER */} 
          <Slide  transition={["slide", "fade"]} notes="">
            <Heading size={1} caps  margin="0 0 70px 0"  textColor="black" textFont="primary" >
              Planning 
            </Heading>
            <List>
              <Appear><ListItem>Séance 1 : choix du projet, début dév</ListItem></Appear>
              <Appear><ListItem>Séance 2 : point d'avancement et dev</ListItem></Appear>
              <Appear><ListItem>Séance 3 : soutenance</ListItem></Appear>
            </List>
          </Slide>


          {/* CONTACT */} 
          <Slide  transition={["slide", "fade"]} notes="" bgImage={images.crazy.replace("/", "")} bgDarken={0.55}>
            <Heading size={1} caps  margin="0 0 70px 0"  textColor="orange" textFont="primary" >
              Nous contacter
            </Heading>
            <List>
              <Appear><ListItem>Email : tp_web_ensiie@inovia.fr</ListItem></Appear>
              <Appear><ListItem>Tous les jeudi aprem @inovia (10 rue Fbg Poissonnière, 75010)</ListItem></Appear>
            </List>
          </Slide>

          {/* 
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.kitchen.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And let's not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary"
            notes="Hard to find cities without any pizza">
            <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
              Pizza Toppings
            </Heading>
            <Layout>
              <Table>
                <TableRow>
                  <TableHeaderItem></TableHeaderItem>
                  <TableHeaderItem>2011</TableHeaderItem>
                  <TableHeaderItem>2013</TableHeaderItem>
                  <TableHeaderItem>2015</TableHeaderItem>
                </TableRow>
                <TableRow>
                  <TableItem>None</TableItem>
                  <TableItem>61.8%</TableItem>
                  <TableItem>39.6%</TableItem>
                  <TableItem>35.0%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pineapple</TableItem>
                  <TableItem>28.3%</TableItem>
                  <TableItem>54.5%</TableItem>
                  <TableItem>61.5%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Pepperoni</TableItem>
                  <TableItem></TableItem>
                  <TableItem>50.2%</TableItem>
                  <TableItem>77.2%</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Olives</TableItem>
                  <TableItem></TableItem>
                  <TableItem>24.9%</TableItem>
                  <TableItem>55.9%</TableItem>
                </TableRow>
              </Table>
            </Layout>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidable.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>*/} 
        </Deck>
      </Spectacle>
    );
  }
}
