"use client";

import { useEffect } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { socialLinks } from "@/lib/content";
import { useDemoDialog } from "@/components/providers/DemoDialogProvider";

const videoHref =
  socialLinks.find((item) => item.label === "YouTube")?.href ??
  "https://www.youtube.com/@leafwaterskincare";

const pillButton = {
  borderRadius: 999,
  px: 2.6,
  py: 1.15,
} as const;

export function LocationScrollReset({ slug }: { slug: string }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return null;
}

export function LocationHeroActions() {
  const { openDemo } = useDemoDialog();

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ flexWrap: "wrap", gap: 1.5, alignItems: { xs: "stretch", sm: "center" } }}
    >
      <Button variant="contained" onClick={openDemo} endIcon={<ArrowForwardIcon />} sx={pillButton}>
        Book a Demo
      </Button>
      <Button
        variant="outlined"
        href={videoHref}
        target="_blank"
        rel="noopener noreferrer"
        startIcon={<PlayArrowIcon />}
        sx={{ ...pillButton, bgcolor: "#fff" }}
      >
        Watch Video
      </Button>
    </Stack>
  );
}

export function LocationBookDemo() {
  const { openDemo } = useDemoDialog();

  return (
    <Button variant="contained" onClick={openDemo} endIcon={<ArrowForwardIcon />} sx={pillButton}>
      Book a Demo
    </Button>
  );
}
