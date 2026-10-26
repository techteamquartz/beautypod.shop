"use client";

import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NextLink from "next/link";
import { locations, navLinks } from "@/lib/content";
import { colors } from "@/theme/colors";
import AppIcon from "@/components/ui/AppIcon";
import type { IconName } from "@/components/ui/AppIcon";
import { useDemoDialog } from "@/components/providers/DemoDialogProvider";

const compactHidden = new Set(["How It Works", "Case Studies"]);

const navItemSx = {
  fontSize: { md: 12, lg: 14 },
  fontWeight: 500,
  color: colors.white,
  whiteSpace: "nowrap",
  letterSpacing: "0.01em",
  textDecoration: "none",
  position: "relative",
  transition: "color 0.2s ease",
  "&:hover": { color: colors.gold },
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -4,
    height: 2,
    bgcolor: colors.gold,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.2s ease",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
} as const;

export default function DesktopNav() {
  const { openDemo } = useDemoDialog();
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <Stack
      component="nav"
      direction="row"
      aria-label="Primary"
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "flex-end",
        gap: { md: 1, lg: 1.8 },
        pr: { md: 0.5, lg: 1 },
      }}
    >
      {navLinks.map((item) =>
        item.label === "Locations" ? (
          <Box
            key={item.label}
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
            onFocus={() => setLocationsOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setLocationsOpen(false);
              }
            }}
            sx={{
              position: "relative",
              display: compactHidden.has(item.label) ? { md: "none", xl: "block" } : "block",
            }}
          >
            <Link
              href={item.href}
              aria-expanded={locationsOpen}
              aria-haspopup="true"
              sx={{ ...navItemSx, display: "inline-flex", alignItems: "center", gap: 0.2 }}
            >
              {item.label}
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </Link>
            <Box
              sx={{
                display: locationsOpen ? "grid" : "none",
                position: "absolute",
                top: "100%",
                right: 0,
                zIndex: 20,
                pt: 1.4,
                minWidth: 420,
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0.4,
                  p: 1.2,
                  bgcolor: "#fff",
                  color: colors.text,
                  borderRadius: 2,
                  boxShadow: "0 18px 40px rgba(13, 68, 54, 0.18)",
                }}
              >
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    component={NextLink}
                    href={`/locations/${location.slug}`}
                    onClick={() => setLocationsOpen(false)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      px: 1.1,
                      py: 1,
                      borderRadius: 1.5,
                      color: colors.text,
                      fontSize: 13.5,
                      fontWeight: 600,
                      "&:hover": { bgcolor: colors.soft, color: colors.green },
                    }}
                  >
                    <AppIcon name={location.icon as IconName} sx={{ fontSize: 18, color: colors.green }} />
                    {location.name}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            sx={{
              ...navItemSx,
              display: compactHidden.has(item.label) ? { md: "none", xl: "inline" } : "inline",
            }}
          >
            {item.label}
          </Link>
        ),
      )}
      <Button
        onClick={openDemo}
        sx={{
          ml: { md: 0.5, lg: 1 },
          px: { md: 2, lg: 2.4 },
          py: 0.7,
          minWidth: 0,
          flexShrink: 0,
          borderRadius: 999,
          border: "1.5px solid #fff",
          color: "#fff",
          bgcolor: "transparent",
          fontWeight: 600,
          fontSize: { md: 13, lg: 14 },
          textTransform: "none",
          "&:hover": {
            bgcolor: "#fff",
            color: colors.header,
            borderColor: "#fff",
            boxShadow: "none",
            transform: "none",
          },
        }}
      >
        Book a Demo
      </Button>
    </Stack>
  );
}
