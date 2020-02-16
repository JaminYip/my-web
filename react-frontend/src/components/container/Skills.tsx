import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

interface SkillMap {
  name: string;
  level: number | null;
}

interface descriptionMap {
  value: number;
  egDescription: string;
  jpDescription: string;
}

const frontendSkillMap = [
  { name: "JavaScript", level: 2.5 },
  { name: "HTML5/CSS", level: 2.5 },
  { name: "TypeScript", level: 1.0 },
  { name: "React", level: 1.0 },
  { name: "jQuery", level: 2.0 }
];

const backendSkillMap = [
  { name: "＜プログラミング言語＞", level: null },
  { name: "Python", level: 3.0 },
  { name: "Java", level: 3.5 },
  { name: "C#", level: 2.5 },
  { name: "Objective-C", level: 2.0 },
  { name: "VBScript", level: 2.0 },
  { name: "＜フレームワーク＞", level: null },
  { name: "Flask", level: 3.0 },
  { name: "Spring", level: 3.0 },
  { name: ".NET", level: 2.0 },
  { name: "＜データベース＞", level: null },
  { name: "MySQL", level: 3.0 },
  { name: "Oracle", level: 3.0 },
  { name: "PostgreSQL", level: 2.0 },
  { name: "MongoDB", level: 2.5 },
  { name: "Redis", level: 2.5 },
  { name: "SQLite", level: 2.0 },
  { name: "＜Webサーバ＆その他＞", level: null },
  { name: "Nginx", level: 2.5 },
  { name: "Apache Kafka", level: 2.0 }
];

const devOpsSkillMap = [
  { name: "AWS", level: 2.0 },
  { name: "Linux", level: 2.0 },
  { name: "Git", level: 2.5 },
  { name: "SVN", level: 3.0 }
];

const descriptionMap = [
  {
    value: 1,
    egDescription: "Beginner",
    jpDescription: "触ったことがある程度"
  },
  {
    value: 2,
    egDescription: "Elementary",
    jpDescription: "実務経験はあるがもう少し習熟が必要"
  },
  {
    value: 3,
    egDescription: "Intermediate",
    jpDescription: "実務レベルで自由に駆使できる"
  },
  {
    value: 4,
    egDescription: "Advanced",
    jpDescription: "実務経験豊富でベストプラクティスを使いこなせる"
  },
  { value: 5, egDescription: "Master", jpDescription: "極めている" }
];

function GetSkills(skillMap: SkillMap[]) {
  const list = [];

  for (const i in skillMap) {
    if (skillMap[i].level == null) {
      list.push(
        <React.Fragment>
          <Grid item xs={12}>
            <Box
              fontSize="caption.fontSize"
              fontWeight="fontWeightLight"
              color="gray"
            >
              {skillMap[i].name}
            </Box>
          </Grid>
        </React.Fragment>
      );
    } else {
      list.push(
        <React.Fragment>
          <Grid item xs={6} md={2}>
            <Box fontSize="body2.fontSize" fontWeight="fontWeightLight">
              {skillMap[i].name}
            </Box>
          </Grid>
          <Grid item xs={6} md={2}>
            <Rating
              value={skillMap[i].level}
              precision={0.5}
              size="small"
              readOnly
            />
          </Grid>
        </React.Fragment>
      );
    }
  }

  return list;
}

function GetDescription(descriptionMap: descriptionMap[]) {
  const list = [];

  for (const i in descriptionMap) {
    list.push(
      <React.Fragment>
        <Box component="fieldset" borderColor="transparent">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Rating value={descriptionMap[i].value} size="small" readOnly />
            <Box
              ml={3}
              fontSize="caption.fontSize"
              fontWeight="fontWeightLight"
            >
              {descriptionMap[i].egDescription}
              <br />
              {descriptionMap[i].jpDescription}
            </Box>
          </div>
        </Box>
      </React.Fragment>
    );
  }

  return list;
}

export default function Skills() {
  const frontendSkills = GetSkills(frontendSkillMap);
  const backendSkills = GetSkills(backendSkillMap);
  const devOpsSkills = GetSkills(devOpsSkillMap);
  const description = GetDescription(descriptionMap);

  return (
    <Container>
      <Typography gutterBottom style={{ minHeight: "100vh" }}>
        <Box
          fontSize="h2.fontSize"
          fontWeight="fontWeightLight"
          letterSpacing={8}
        >
          Skills
        </Box>
        <Box
          fontSize="overline.fontSize"
          fontWeight="fontWeightLight"
          letterSpacing={2}
        >
          -スキルセット-
        </Box>
        <Box component="fieldset" borderColor="transparent" mt={4}>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography gutterBottom>
                <Box
                  fontSize="subtitle1.fontSize"
                  fontWeight="fontWeightLight"
                  letterSpacing={5}
                >
                  Front-end
                </Box>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Box
                component="fieldset"
                borderColor="transparent"
                style={{ flexGrow: 1 }}
              >
                <Grid container spacing={3}>
                  {frontendSkills}
                </Grid>
              </Box>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                <Box
                  fontSize="subtitle1.fontSize"
                  fontWeight="fontWeightLight"
                  letterSpacing={5}
                >
                  Back-end
                </Box>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Box
                component="fieldset"
                borderColor="transparent"
                style={{ flexGrow: 1 }}
              >
                <Grid container spacing={3}>
                  {backendSkills}
                </Grid>
              </Box>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel defaultExpanded>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                <Box
                  fontSize="subtitle1.fontSize"
                  fontWeight="fontWeightLight"
                  letterSpacing={5}
                >
                  DevOps
                </Box>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Box
                component="fieldset"
                borderColor="transparent"
                style={{ flexGrow: 1 }}
              >
                <Grid container spacing={3}>
                  {devOpsSkills}
                </Grid>
              </Box>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Paper component="div" elevation={1}>
            {description}
          </Paper>
        </Box>
      </Typography>
    </Container>
  );
}
