import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function About() {
  return (
    <Typography
      component="span"
      style={{ minHeight: "100vh", color: "#b0bec5" }}
    >
      <Box
        fontSize="h2.fontSize"
        fontWeight="fontWeightLight"
        letterSpacing={8}
      >
        About
      </Box>
      <Box
        fontSize="overline.fontSize"
        fontWeight="fontWeightLight"
        letterSpacing={2}
      >
        -？？？？-
      </Box>
      <Typography component="span" variant="h1" gutterBottom>
        <Box>h1. Head</Box>
      </Typography>
      <Typography component="span" variant="h2" gutterBottom>
        <Box>h2. Heading</Box>
      </Typography>
      <Typography component="span" variant="h3" gutterBottom>
        h3. Heading
      </Typography>
      <Typography component="span" variant="h4" gutterBottom>
        h4. Heading
      </Typography>
      <Typography component="span" variant="h5" gutterBottom>
        h5. Heading
      </Typography>
      <Typography component="span" variant="h6" gutterBottom>
        h6. Heading
      </Typography>
      <Typography component="span" variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography component="span" variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography component="span" variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography component="span" variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography
        component="span"
        variant="button"
        display="block"
        gutterBottom
      >
        button text
      </Typography>
      <Typography
        component="span"
        variant="caption"
        display="block"
        gutterBottom
      >
        caption text
      </Typography>
      <Typography
        component="span"
        variant="overline"
        display="block"
        gutterBottom
      >
        overline text
      </Typography>
    </Typography>
  );
}
