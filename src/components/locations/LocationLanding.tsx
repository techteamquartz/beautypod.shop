import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import LocationCard from "@/components/home/LocationCard";
import { LocationBookDemo, LocationHeroActions, LocationScrollReset } from "@/components/locations/LocationActions";
import AppIcon from "@/components/ui/AppIcon";
import SectionHeading from "@/components/ui/SectionHeading";
import { locations } from "@/lib/content";
import { locationHowSteps, type LocationPageContent } from "@/lib/locationPages";
import { colors } from "@/theme/colors";

function LeafMark() {
  return (
    <Box
      component="svg"
      viewBox="0 0 220 260"
      aria-hidden
      sx={{ width: "100%", height: "100%" }}
    >
      <path
        d="M118 18c38 28 78 86 78 148-42-8-78 6-118 38C46 148 58 78 118 18z"
        fill="#2b5f4c"
        opacity="0.16"
      />
      <path
        d="M96 46c34 24 62 70 58 122-32-14-62-4-96 22 4-54 12-98 38-144z"
        fill="#3d7a62"
        opacity="0.2"
      />
    </Box>
  );
}

function IconLabel({
  icon,
  label,
  light = false,
}: {
  icon: LocationPageContent["highlights"][number]["icon"];
  label: string;
  light?: boolean;
}) {
  return (
    <Box sx={{ textAlign: "center", px: 1 }}>
      <AppIcon name={icon} sx={{ fontSize: 28, color: light ? "#fff" : colors.green }} />
      <Typography
        sx={{
          display: "block",
          mt: 1,
          fontSize: 13,
          lineHeight: 1.35,
          fontWeight: 600,
          color: light ? "#fff" : colors.text,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function LocationLanding({ page }: { page: LocationPageContent }) {
  const others = locations.filter((location) => location.slug !== page.slug);

  return (
    <Box component="main" sx={{ bgcolor: "#f7f8f4" }}>
      <LocationScrollReset slug={page.slug} />
      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(ellipse at 8% 80%, rgba(220, 238, 228, 0.9) 0%, transparent 42%), linear-gradient(180deg, #fbfcf8 0%, #f3f6ef 100%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: 140, md: 220 },
            height: { xs: 180, md: 280 },
            left: { xs: -70, md: -40 },
            bottom: -30,
            pointerEvents: "none",
          }}
        >
          <LeafMark />
        </Box>
        <Box
          sx={{
            maxWidth: 1240,
            mx: "auto",
            px: { xs: 2.4, md: 4 },
            py: { xs: 4, md: 6 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
            gap: { xs: 3, lg: 4 },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="overline" sx={{ display: "block", mb: 1.5, color: colors.green }}>
              {page.eyebrow}
            </Typography>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: "2.15rem", md: "3.15rem" },
                lineHeight: 1.08,
                maxWidth: 640,
                mb: 2,
                color: "#16342c",
              }}
            >
              {page.title}
            </Typography>
            <Typography sx={{ color: "#3d514b", fontSize: { xs: 15, md: 16.5 }, lineHeight: 1.6, maxWidth: 620, mb: 3 }}>
              {page.intro}
            </Typography>
            <LocationHeroActions />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" },
                gap: 1.5,
                mt: 3.5,
                maxWidth: 640,
              }}
            >
              {page.highlights.map((item) => (
                <IconLabel key={item.label} icon={item.icon} label={item.label} />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              minHeight: { xs: 280, md: 460 },
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 18px 40px rgba(16, 44, 39, 0.12)",
            }}
          >
            <Image
              src={page.heroImage}
              alt={`${page.name} BeautyPod deployment`}
              fill
              priority
              sizes="(max-width: 1050px) 100vw, 46vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 5, md: 7 }, px: { xs: 2.4, md: 4 } }}>
        <Box sx={{ maxWidth: 1240, mx: "auto" }}>
          <Box sx={{ maxWidth: 760, mb: { xs: 3, md: 4 } }}>
            <Typography variant="h2" component="h2" sx={{ fontSize: { xs: 28, md: 36 }, mb: 1.2 }}>
              {page.whyTitle}
            </Typography>
            <Typography sx={{ color: colors.muted, lineHeight: 1.6 }}>{page.whyText}</Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr 1.15fr" },
              gap: 2,
            }}
          >
            {page.reasons.map((reason) => (
              <Box
                key={reason.label}
                sx={{
                  bgcolor: "#fff",
                  border: `1px solid ${colors.border}`,
                  borderRadius: 2.5,
                  px: 2,
                  py: 2.6,
                  textAlign: "center",
                  boxShadow: "0 8px 24px rgba(16, 44, 39, 0.04)",
                }}
              >
                <AppIcon name={reason.icon} sx={{ fontSize: 30, color: colors.green, mb: 1.2 }} />
                <Typography sx={{ fontWeight: 700, fontSize: 14.5, lineHeight: 1.35, color: colors.heading }}>
                  {reason.label}
                </Typography>
              </Box>
            ))}
            <Box
              sx={{
                position: "relative",
                gridColumn: { xs: "1", sm: "1 / -1", lg: "4" },
                gridRow: { lg: "1 / span 2" },
                minHeight: { xs: 280, lg: "100%" },
                height: { lg: "100%" },
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <Image
                src={page.promoImage}
                alt=""
                fill
                sizes="(max-width: 1050px) 100vw, 28vw"
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(8,40,32,0.05) 10%, rgba(8,40,32,0.82) 100%)",
                }}
              />
              <Box sx={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", p: 3, color: "#fff" }}>
                <Typography sx={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#d7f3e6" }}>
                  {page.promoEyebrow}
                </Typography>
                <Typography variant="h2" component="h3" sx={{ color: "#fff", fontSize: { xs: 26, md: 30 }, mt: 0.6, mb: 1 }}>
                  {page.promoTitle}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.88)", fontSize: 14.5, lineHeight: 1.5 }}>
                  {page.promoText}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ py: { xs: 5, md: 7 }, px: { xs: 2.4, md: 4 } }}>
        <Box sx={{ maxWidth: 1240, mx: "auto" }}>
          <SectionHeading title={page.howTitle} subtitle={page.howText} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {locationHowSteps.map((step, index) => (
              <Box key={step.no} sx={{ position: "relative" }}>
                {index < locationHowSteps.length - 1 ? (
                  <ArrowForwardIcon
                    sx={{
                      display: { xs: "none", lg: "block" },
                      position: "absolute",
                      right: -22,
                      top: "28%",
                      color: "#8aa099",
                      zIndex: 2,
                    }}
                  />
                ) : null}
                <Box sx={{ position: "relative", aspectRatio: "4 / 3", borderRadius: 2.5, overflow: "hidden" }}>
                  <Image
                    src={step.image}
                    alt={`${step.title}: ${step.text}`}
                    fill
                    sizes="(max-width: 760px) 100vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    bgcolor: colors.green,
                    color: "#fff",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 800,
                    mt: -2.2,
                    ml: 1.5,
                    position: "relative",
                    zIndex: 1,
                    boxShadow: "0 6px 16px rgba(8,127,91,0.28)",
                  }}
                >
                  {step.no}
                </Box>
                <Typography sx={{ fontWeight: 800, fontSize: 18, mt: 1, color: colors.heading }}>
                  {step.title}
                </Typography>
                <Typography sx={{ color: colors.muted, fontSize: 14, mt: 0.4 }}>{step.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 5, md: 7 }, px: { xs: 2.4, md: 4 } }}>
        <Box sx={{ maxWidth: 1240, mx: "auto" }}>
          <SectionHeading title={page.placementsTitle} subtitle={page.placementsText} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: page.placements.length > 4 ? "repeat(5, 1fr)" : "repeat(4, 1fr)",
              },
              gap: 2,
            }}
          >
            {page.placements.map((placement) => (
              <Box key={placement.title}>
                <Box sx={{ position: "relative", aspectRatio: placement.image.includes("/location-pages/") ? "16 / 9" : "1.35", borderRadius: 2.5, overflow: "hidden", mb: 1.4 }}>
                  <Image
                    src={placement.image}
                    alt={placement.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 22vw"
                    style={{ objectFit: "cover", objectPosition: placement.position ?? "center" }}
                  />
                </Box>
                <Typography sx={{ fontWeight: 800, fontSize: 15, color: colors.heading, lineHeight: 1.3 }}>
                  {placement.title}
                </Typography>
                <Typography sx={{ color: colors.muted, fontSize: 13.5, mt: 0.6, lineHeight: 1.45 }}>
                  {placement.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {page.useCases?.length ? (
        <Box component="section" sx={{ py: { xs: 5, md: 7 }, px: { xs: 2.4, md: 4 } }}>
          <Box sx={{ maxWidth: 1240, mx: "auto" }}>
            <SectionHeading title={page.useCasesTitle ?? "Ways to Stock BeautyPod"} subtitle={page.useCasesText} />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
                gap: 2,
              }}
            >
              {page.useCases.map((item) => (
                <Box key={item.title}>
                  <Box sx={{ position: "relative", aspectRatio: "4 / 3", borderRadius: 2.5, overflow: "hidden", mb: 1.4, bgcolor: "#fff" }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 760px) 100vw, 22vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Typography sx={{ fontWeight: 800, fontSize: 15, color: colors.heading, lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: colors.muted, fontSize: 13.5, mt: 0.6, lineHeight: 1.45 }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ) : null}

      <Box
        component="section"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
          minHeight: { md: 320 },
        }}
      >
        <Box sx={{ bgcolor: "#0e4a3a", color: "#fff", px: { xs: 2.6, md: 6 }, py: { xs: 4.5, md: 6 } }}>
          <Typography variant="h2" component="h2" sx={{ color: "#fff", fontSize: { xs: 28, md: 34 }, mb: 3.5, maxWidth: 460 }}>
            {page.resultsTitle}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" },
              gap: 2,
            }}
          >
            {page.results.map((result) => (
              <Box key={result.label}>
                <AppIcon name={result.icon} sx={{ fontSize: 26, color: "#d7f3e6", mb: 1 }} />
                <Typography sx={{ fontWeight: 800, fontSize: result.value.startsWith("+") ? 28 : 20, lineHeight: 1.15 }}>
                  {result.value}
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.78)", fontSize: 13, mt: 0.6, lineHeight: 1.35 }}>
                  {result.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#f6f3ea",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1.15fr 0.85fr" },
            minHeight: 260,
          }}
        >
          <Box sx={{ px: { xs: 2.6, md: 3.5 }, py: { xs: 3.5, md: 4.5 }, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography
              aria-hidden
              sx={{ fontFamily: "Georgia, serif", fontSize: 54, lineHeight: 0.8, color: colors.green, mb: 1 }}
            >
              “
            </Typography>
            <Typography sx={{ fontSize: 15.5, lineHeight: 1.55, color: colors.text }}>{page.quote}</Typography>
            <Typography sx={{ mt: 2, fontSize: 13, color: colors.muted }}>{page.quoteBy}</Typography>
          </Box>
          <Box sx={{ position: "relative", minHeight: 220 }}>
            <Image
              src={page.quoteImage}
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, 20vw"
              style={{ objectFit: "cover", objectPosition: "center top" }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          position: "relative",
          overflow: "hidden",
          px: { xs: 2.4, md: 4 },
          py: { xs: 5, md: 7 },
          background:
            "linear-gradient(180deg, #fbfcf8 0%, #f3f7f2 100%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 180,
            height: 220,
            left: -50,
            bottom: -40,
            pointerEvents: "none",
          }}
        >
          <LeafMark />
        </Box>
        <Box
          sx={{
            maxWidth: 1240,
            mx: "auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.1fr 0.9fr" },
            gap: { xs: 3, md: 5 },
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h2" component="h2" sx={{ fontSize: { xs: 30, md: 38 }, mb: 1.5, maxWidth: 560 }}>
              {page.ctaTitle}
            </Typography>
            <Typography sx={{ color: colors.muted, lineHeight: 1.6, mb: 2.5, maxWidth: 560 }}>
              {page.ctaText}
            </Typography>
            <LocationBookDemo />
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 1.5,
            }}
          >
            {page.ctaPoints.map((point) => (
              <Box
                key={point.label}
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 2.5,
                  px: 2,
                  py: 2.2,
                  boxShadow: "0 8px 22px rgba(16,44,39,0.05)",
                  border: `1px solid ${colors.border}`,
                }}
              >
                <AppIcon name={point.icon} sx={{ fontSize: 26, color: colors.green, mb: 1 }} />
                <Typography sx={{ fontWeight: 700, fontSize: 14, lineHeight: 1.35 }}>{point.label}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" sx={{ bgcolor: colors.locationBg, py: { xs: 5, md: 6 }, px: { xs: 2.2, md: 3 } }}>
        <Box sx={{ maxWidth: 1240, mx: "auto" }}>
          <SectionHeading title="Explore Other Locations" subtitle="BeautyPod is built for every high-footfall space" />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(7, 1fr)",
              },
              gap: { xs: 1.25, md: 1.5 },
            }}
          >
            {others.map((location) => (
              <LocationCard key={location.slug} {...location} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
