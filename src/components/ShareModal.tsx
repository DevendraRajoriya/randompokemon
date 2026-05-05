"use client";

import { useState, useEffect } from "react";
import { X, Download, Copy, Check, Twitter, Facebook, Link } from "lucide-react";
import { getTypeColor, getTypeGradient } from "@/utils/typeColors";

interface PokemonType {
    type: {
        name: string;
    };
}

interface PokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

interface PokemonAbility {
    ability: {
        name: string;
    };
    is_hidden?: boolean;
}

interface Pokemon {
    id: number;
    name: string;
    height?: number;
    weight?: number;
    sprites: {
        front_default?: string;
        other?: {
            "official-artwork"?: {
                front_default?: string;
            };
            home?: {
                front_default?: string;
            };
        };
    };
    types: PokemonType[];
    stats?: PokemonStat[];
    abilities?: PokemonAbility[];
}

interface ShareModalProps {
    pokemon: Pokemon;
    onClose: () => void;
}

// Card dimensions — optimized for social sharing (1080x1350 = IG post ratio)
const CARD_WIDTH = 1080;
const CARD_HEIGHT = 1500;

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatStatLabel(name: string): string {
    const map: Record<string, string> = {
        hp: "HP",
        attack: "ATK",
        defense: "DEF",
        "special-attack": "SP.A",
        "special-defense": "SP.D",
        speed: "SPD",
    };
    return map[name] || name.toUpperCase();
}

function getStatColor(value: number): string {
    if (value >= 150) return "#ef4444";
    if (value >= 100) return "#f59e0b";
    if (value >= 70) return "#22c55e";
    if (value >= 40) return "#6366f1";
    return "#94a3b8";
}

// ============================================================
// PREMIUM CARD UI COMPONENT
// ============================================================
interface PokemonCardUIProps {
    pokemon: Pokemon;
    stats: { name: string; value: number }[];
    bst: number;
    imageDataUrl?: string;
}

function PokemonCardUI({ pokemon, stats, bst, imageDataUrl }: PokemonCardUIProps) {
    const name = capitalize(pokemon.name);
    const primaryType = pokemon.types[0]?.type.name || "normal";
    const secondaryType = pokemon.types[1]?.type.name;
    const typeColor = getTypeColor(primaryType);
    const typeColor2 = secondaryType ? getTypeColor(secondaryType) : typeColor;

    const heightM = pokemon.height ? (pokemon.height / 10).toFixed(1) : "?";
    const weightKg = pokemon.weight ? (pokemon.weight / 10).toFixed(1) : "?";

    return (
        <div
            style={{
                width: `${CARD_WIDTH}px`,
                height: `${CARD_HEIGHT}px`,
                background: `linear-gradient(145deg, #0f0f0f 0%, #1a1a2e 40%, #16213e 100%)`,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
                fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
                boxShadow: `inset 0 0 0 6px ${typeColor}, inset 0 0 0 8px #F5BC22, inset 0 0 0 10px ${typeColor2}`,
            }}
        >

            {/* Type gradient glow overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "600px",
                    background: `radial-gradient(ellipse 80% 50% at 50% 10%, ${typeColor}30 0%, transparent 70%)`,
                    pointerEvents: "none",
                    zIndex: 1,
                }}
            />

            {/* ═══ HEADER ═══ */}
            <div
                style={{
                    position: "relative",
                    zIndex: 5,
                    padding: "48px 56px 0",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                }}
            >
                <div>
                    <div
                        style={{
                            fontSize: "22px",
                            fontWeight: "600",
                            color: "#ffffff50",
                            letterSpacing: "4px",
                            textTransform: "uppercase",
                            marginBottom: "8px",
                        }}
                    >
                        #{String(pokemon.id).padStart(4, "0")}
                    </div>
                    <div
                        style={{
                            fontSize: "72px",
                            fontWeight: "900",
                            color: "#FFFFFF",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            lineHeight: "1",
                            textShadow: `0 4px 24px ${typeColor}60`,
                        }}
                    >
                        {name}
                    </div>
                </div>

                {/* BST Circle Badge */}
                <div
                    style={{
                        width: "110px",
                        height: "110px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${typeColor}, ${typeColor2})`,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 8px 32px ${typeColor}50`,
                        border: "4px solid rgba(255,255,255,0.15)",
                        flexShrink: 0,
                    }}
                >
                    <span style={{ fontSize: "16px", fontWeight: "700", color: "rgba(255,255,255,0.7)", letterSpacing: "2px" }}>BST</span>
                    <span style={{ fontSize: "36px", fontWeight: "900", color: "#fff", lineHeight: "1" }}>{bst}</span>
                </div>
            </div>

            {/* Type Badges */}
            <div
                style={{
                    position: "relative",
                    zIndex: 5,
                    padding: "20px 56px 0",
                    display: "flex",
                    gap: "14px",
                }}
            >
                {pokemon.types.map((typeInfo) => (
                    <div
                        key={typeInfo.type.name}
                        style={{
                            height: "50px",
                            borderRadius: "25px",
                            backgroundColor: getTypeColor(typeInfo.type.name),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0 28px",
                            boxShadow: `0 4px 16px ${getTypeColor(typeInfo.type.name)}50`,
                        }}
                    >
                        <span
                            style={{
                                color: "white",
                                fontSize: "24px",
                                fontWeight: "800",
                                textTransform: "uppercase",
                                letterSpacing: "2px",
                                textShadow: "0 1px 2px rgba(0,0,0,0.4)",
                            }}
                        >
                            {typeInfo.type.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* ═══ ARTWORK ═══ */}
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "500px",
                    position: "relative",
                    zIndex: 5,
                    margin: "24px 0 0",
                }}
            >
                {/* Glow circle — no transform, marginLeft instead of translateX */}
                <div
                    style={{
                        position: "absolute",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${typeColor}20 0%, ${typeColor}10 40%, transparent 70%)`,
                        top: 0,
                        left: "50%",
                        marginLeft: "-250px",
                    }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={imageDataUrl || pokemon.sprites.other?.["official-artwork"]?.front_default || pokemon.sprites.other?.home?.front_default || pokemon.sprites.front_default || ""}
                    alt={`${name} official artwork`}
                    crossOrigin="anonymous"
                    style={{
                        height: "460px",
                        width: "460px",
                        objectFit: "contain",
                        position: "relative",
                        zIndex: 2,
                    }}
                />
            </div>

            {/* ═══ STATS SECTION ═══ */}
            <div
                style={{
                    position: "relative",
                    zIndex: 5,
                    padding: "0 56px",
                    marginTop: "32px",
                }}
            >
                {/* Stats Grid */}
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {stats.map((stat) => (
                        <div key={stat.name} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <span
                                style={{
                                    width: "85px",
                                    fontSize: "18px",
                                    fontWeight: "800",
                                    color: "rgba(255,255,255,0.45)",
                                    letterSpacing: "1px",
                                    textAlign: "right",
                                    flexShrink: 0,
                                }}
                            >
                                {formatStatLabel(stat.name)}
                            </span>
                            <span
                                style={{
                                    width: "52px",
                                    fontSize: "26px",
                                    fontWeight: "900",
                                    color: "#FFFFFF",
                                    textAlign: "right",
                                    flexShrink: 0,
                                    fontVariantNumeric: "tabular-nums",
                                }}
                            >
                                {stat.value}
                            </span>
                            <div
                                style={{
                                    flex: 1,
                                    height: "16px",
                                    background: "rgba(255,255,255,0.08)",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        width: `${Math.min((stat.value / 255) * 100, 100)}%`,
                                        height: "100%",
                                        background: `linear-gradient(90deg, ${getStatColor(stat.value)}, ${getStatColor(stat.value)}cc)`,
                                        borderRadius: "8px",
                                        boxShadow: `0 0 12px ${getStatColor(stat.value)}40`,
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Height / Weight / Abilities row */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "24px",
                        padding: "20px 0",
                        borderTop: "1px solid rgba(255,255,255,0.08)",
                    }}
                >
                    <div style={{ display: "flex", gap: "32px" }}>
                        <div>
                            <div style={{ fontSize: "14px", fontWeight: "700", color: "rgba(255,255,255,0.35)", letterSpacing: "2px", textTransform: "uppercase" }}>Height</div>
                            <div style={{ fontSize: "22px", fontWeight: "800", color: "#fff" }}>{heightM}m</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "14px", fontWeight: "700", color: "rgba(255,255,255,0.35)", letterSpacing: "2px", textTransform: "uppercase" }}>Weight</div>
                            <div style={{ fontSize: "22px", fontWeight: "800", color: "#fff" }}>{weightKg}kg</div>
                        </div>
                    </div>
                    {pokemon.abilities && pokemon.abilities.length > 0 && (
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "14px", fontWeight: "700", color: "rgba(255,255,255,0.35)", letterSpacing: "2px", textTransform: "uppercase" }}>Abilities</div>
                            <div style={{ fontSize: "20px", fontWeight: "700", color: "rgba(255,255,255,0.8)", textTransform: "capitalize" }}>
                                {pokemon.abilities.map(a => a.ability.name.replace(/-/g, " ")).join(" / ")}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* ═══ FOOTER ═══ */}
            <div
                style={{
                    position: "relative",
                    zIndex: 5,
                    padding: "20px 56px 32px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
            >
                <span
                    style={{
                        fontSize: "24px",
                        fontWeight: "800",
                        color: "#F5BC22",
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                    }}
                >
                    randompokemon.co
                </span>
                <span
                    style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "rgba(255,255,255,0.25)",
                        letterSpacing: "1px",
                    }}
                >
                    RANDOM POKEMON GENERATOR
                </span>
            </div>
        </div>
    );
}

// ============================================================
// MAIN SHARE MODAL COMPONENT
// ============================================================
export default function ShareModal({ pokemon, onClose }: ShareModalProps) {
    const [copied, setCopied] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);
    const [downloading, setDownloading] = useState(false);
    const [instagramToast, setInstagramToast] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("");
    const [imageDataUrl, setImageDataUrl] = useState<string>("");
    const [previewScale, setPreviewScale] = useState(0.3);

    // Lock scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    // Calculate preview scale based on viewport
    useEffect(() => {
        const calculateScale = () => {
            const isDesktop = window.innerWidth >= 768;
            const modalWidth = Math.min(window.innerWidth * 0.96, 640) - 32;
            const nonPreviewHeight = 260;
            const availableHeight = window.innerHeight * 0.96 - nonPreviewHeight;
            const scaleByWidth = modalWidth / CARD_WIDTH;
            const scaleByHeight = availableHeight / CARD_HEIGHT;
            const maxScale = isDesktop ? 0.52 : 0.42;
            setPreviewScale(Math.min(scaleByWidth, scaleByHeight, maxScale));
        };

        calculateScale();
        window.addEventListener("resize", calculateScale);
        return () => window.removeEventListener("resize", calculateScale);
    }, []);

    // Safely get the current URL (client-side only)
    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, []);

    // Pre-fetch Pokemon image as base64 to avoid CORS canvas tainting
    useEffect(() => {
        const imgUrl = pokemon.sprites.other?.["official-artwork"]?.front_default
            || pokemon.sprites.other?.home?.front_default
            || pokemon.sprites.front_default
            || "";
        if (!imgUrl) return;

        fetch(imgUrl)
            .then((res) => res.blob())
            .then((blob) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (typeof reader.result === "string") {
                        setImageDataUrl(reader.result);
                    }
                };
                reader.readAsDataURL(blob);
            })
            .catch((err) => console.warn("Could not pre-fetch image for card:", err));
    }, [pokemon]);

    const capitalizedName = capitalize(pokemon.name);

    // Extract stats
    const stats = (pokemon.stats || []).map((s) => ({
        name: s.stat.name,
        value: s.base_stat,
    }));

    // Fallback stats if none available
    const finalStats =
        stats.length > 0
            ? stats
            : [
                { name: "hp", value: 50 },
                { name: "attack", value: 50 },
                { name: "defense", value: 50 },
                { name: "special-attack", value: 50 },
                { name: "special-defense", value: 50 },
                { name: "speed", value: 50 },
            ];

    const bst = finalStats.reduce((sum, s) => sum + s.value, 0);

    // Generate image via pure Canvas API — no DOM capture, no html2canvas
    const generateImage = async (): Promise<HTMLCanvasElement | null> => {
        const canvas = document.createElement("canvas");
        canvas.width = CARD_WIDTH;
        canvas.height = CARD_HEIGHT;
        const ctx = canvas.getContext("2d");
        if (!ctx) return null;

        const primaryType = pokemon.types[0]?.type.name || "normal";
        const secondaryType = pokemon.types[1]?.type.name;
        const typeColor = getTypeColor(primaryType);
        const typeColor2 = secondaryType ? getTypeColor(secondaryType) : typeColor;
        const name = capitalize(pokemon.name);

        // ── BACKGROUND ──────────────────────────────────────────
        const bgGrad = ctx.createLinearGradient(0, 0, CARD_WIDTH, CARD_HEIGHT);
        bgGrad.addColorStop(0, "#0f0f0f");
        bgGrad.addColorStop(0.4, "#1a1a2e");
        bgGrad.addColorStop(1, "#16213e");
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

        // ── TYPE GLOW OVERLAY ────────────────────────────────────
        const glowGrad = ctx.createRadialGradient(CARD_WIDTH / 2, 0, 0, CARD_WIDTH / 2, 0, 700);
        glowGrad.addColorStop(0, typeColor + "30");
        glowGrad.addColorStop(1, "transparent");
        ctx.fillStyle = glowGrad;
        ctx.fillRect(0, 0, CARD_WIDTH, 600);

        // ── HOLOGRAPHIC BORDER ───────────────────────────────────
        const borderGrad = ctx.createLinearGradient(0, 0, CARD_WIDTH, CARD_HEIGHT);
        borderGrad.addColorStop(0, typeColor);
        borderGrad.addColorStop(0.25, "#F5BC22");
        borderGrad.addColorStop(0.5, typeColor2);
        borderGrad.addColorStop(0.75, "#F5BC22");
        borderGrad.addColorStop(1, typeColor);
        ctx.strokeStyle = borderGrad;
        ctx.lineWidth = 12;
        ctx.strokeRect(6, 6, CARD_WIDTH - 12, CARD_HEIGHT - 12);

        // ── HEADER: ID ───────────────────────────────────────────
        ctx.font = "bold 32px system-ui";
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillText(`#${String(pokemon.id).padStart(4, "0")}`, 56, 90);

        // ── HEADER: NAME ─────────────────────────────────────────
        ctx.font = "900 96px system-ui";
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = typeColor + "80";
        ctx.shadowBlur = 30;
        ctx.fillText(name.toUpperCase(), 56, 185);
        ctx.shadowBlur = 0;

        // ── BST CIRCLE ───────────────────────────────────────────
        const bstTotal = finalStats.reduce((sum, s) => sum + s.value, 0);
        const cx = CARD_WIDTH - 120, cy = 120, r = 80;
        const circleGrad = ctx.createRadialGradient(cx - 20, cy - 20, 0, cx, cy, r);
        circleGrad.addColorStop(0, typeColor);
        circleGrad.addColorStop(1, typeColor2);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = circleGrad;
        ctx.fill();
        ctx.font = "700 22px system-ui";
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.textAlign = "center";
        ctx.fillText("BST", cx, cy - 10);
        ctx.font = "900 52px system-ui";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(String(bstTotal), cx, cy + 44);
        ctx.textAlign = "left";

        // ── TYPE BADGES ──────────────────────────────────────────
        let badgeX = 56;
        const badgeY = 220;
        for (const typeInfo of pokemon.types) {
            const tColor = getTypeColor(typeInfo.type.name);
            const label = typeInfo.type.name.toUpperCase();
            ctx.font = "800 28px system-ui";
            const textW = ctx.measureText(label).width;
            const badgeW = textW + 48;
            const badgeH = 52;
            ctx.beginPath();
            (ctx as CanvasRenderingContext2D & { roundRect: (...a: unknown[]) => void }).roundRect(badgeX, badgeY, badgeW, badgeH, 26);
            ctx.fillStyle = tColor;
            ctx.fill();
            ctx.fillStyle = "#ffffff";
            ctx.fillText(label, badgeX + 24, badgeY + 36);
            badgeX += badgeW + 16;
        }

        // ── POKEMON ARTWORK ──────────────────────────────────────
        if (imageDataUrl) {
            await new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => {
                    const imgSize = 480;
                    const imgX = (CARD_WIDTH - imgSize) / 2;
                    const imgY = 290;
                    ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
                    resolve();
                };
                img.onerror = () => resolve();
                img.src = imageDataUrl;
            });
        }

        // ── STATS ────────────────────────────────────────────────
        const statsY = 840;
        const statLabelX = 56;
        const statNumX = 200;
        const statBarX = 280;
        const statBarWidth = CARD_WIDTH - statBarX - 56;

        for (let i = 0; i < finalStats.length; i++) {
            const stat = finalStats[i];
            const rowY = statsY + i * 62;

            // Stat label — right-aligned into its fixed column
            ctx.font = "700 28px system-ui";
            ctx.fillStyle = "rgba(255,255,255,0.45)";
            ctx.textAlign = "right";
            ctx.fillText(formatStatLabel(stat.name), statLabelX + 80, rowY + 20);

            // Stat number — left-aligned in its own fixed column
            ctx.font = "900 40px system-ui";
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "left";
            ctx.fillText(String(stat.value), statNumX, rowY + 22);

            // Bar background
            ctx.fillStyle = "rgba(255,255,255,0.08)";
            ctx.beginPath();
            (ctx as CanvasRenderingContext2D & { roundRect: (...a: unknown[]) => void }).roundRect(statBarX, rowY, statBarWidth, 20, 10);
            ctx.fill();

            // Bar fill
            const pct = Math.min(stat.value / 255, 1);
            ctx.fillStyle = getStatColor(stat.value);
            ctx.beginPath();
            (ctx as CanvasRenderingContext2D & { roundRect: (...a: unknown[]) => void }).roundRect(statBarX, rowY, statBarWidth * pct, 20, 10);
            ctx.fill();
        }
        ctx.textAlign = "left";

        // ── HEIGHT / WEIGHT / ABILITIES ──────────────────────────
        const hwY = statsY + finalStats.length * 62 + 40;
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(56, hwY);
        ctx.lineTo(CARD_WIDTH - 56, hwY);
        ctx.stroke();

        const heightM = pokemon.height ? (pokemon.height / 10).toFixed(1) : "?";
        const weightKg = pokemon.weight ? (pokemon.weight / 10).toFixed(1) : "?";

        ctx.font = "700 20px system-ui";
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.fillText("HEIGHT", 56, hwY + 36);
        ctx.fillText("WEIGHT", 240, hwY + 36);

        ctx.font = "800 32px system-ui";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`${heightM}m`, 56, hwY + 74);
        ctx.fillText(`${weightKg}kg`, 240, hwY + 74);

        if (pokemon.abilities && pokemon.abilities.length > 0) {
            const abText = pokemon.abilities
                .map((a) => capitalize(a.ability.name.replace(/-/g, " ")))
                .join(" / ");
            ctx.font = "700 20px system-ui";
            ctx.fillStyle = "rgba(255,255,255,0.35)";
            ctx.textAlign = "right";
            ctx.fillText("ABILITIES", CARD_WIDTH - 56, hwY + 36);
            ctx.font = "700 26px system-ui";
            ctx.fillStyle = "rgba(255,255,255,0.8)";
            ctx.fillText(abText, CARD_WIDTH - 56, hwY + 74);
            ctx.textAlign = "left";
        }

        // ── FOOTER ───────────────────────────────────────────────
        const footerY = hwY + 120;
        ctx.strokeStyle = "rgba(255,255,255,0.06)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(56, footerY - 20);
        ctx.lineTo(CARD_WIDTH - 56, footerY - 20);
        ctx.stroke();

        ctx.font = "800 32px system-ui";
        ctx.fillStyle = "#F5BC22";
        ctx.fillText("randompokemon.co", 56, footerY + 20);

        ctx.font = "600 24px system-ui";
        ctx.fillStyle = "rgba(255,255,255,0.25)";
        ctx.textAlign = "right";
        ctx.fillText("RANDOM POKEMON GENERATOR", CARD_WIDTH - 56, footerY + 20);
        ctx.textAlign = "left";

        return canvas;
    };

    const handleDownload = async () => {
        setDownloading(true);
        try {
            const canvas = await generateImage();
            if (!canvas) {
                setDownloading(false);
                return;
            }

            // Use toDataURL for reliable PNG download (avoids blob revocation race condition)
            const dataUrl = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.download = `${pokemon.name}-card.png`;
            link.href = dataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error generating image:", error);
        } finally {
            setDownloading(false);
        }
    };

    const handleCopyToClipboard = async () => {
        try {
            const canvas = await generateImage();
            if (!canvas) return;

            // Wrap toBlob in a Promise for reliable async handling
            const blob = await new Promise<Blob | null>((resolve) => {
                canvas.toBlob((b) => resolve(b), "image/png");
            });

            if (!blob) return;

            await navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob }),
            ]);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error("Error copying to clipboard:", error);
        }
    };

    // Social Share Functions
    const shareToTwitter = () => {
        const text = `Check out this ${capitalizedName} POKEMON card! 🎴`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const shareToFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const shareToReddit = () => {
        const title = `Look at this ${capitalizedName} POKEMON card!`;
        const url = `https://www.reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const handleInstagramShare = async () => {
        // Try native Web Share API first (works on mobile — opens share sheet with Instagram)
        if (typeof navigator !== "undefined" && navigator.share) {
            try {
                const canvas = await generateImage();
                if (canvas) {
                    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob((b) => resolve(b), "image/png"));
                    if (blob) {
                        const file = new File([blob], `${pokemon.name}-card.png`, { type: "image/png" });
                        if (navigator.canShare && navigator.canShare({ files: [file] })) {
                            await navigator.share({ files: [file], title: `${capitalize(pokemon.name)} POKEMON Card` });
                            return;
                        }
                    }
                }
            } catch (err) {
                // User cancelled or share failed — fall through to download
                if ((err as Error).name === "AbortError") return;
            }
        }
        // Fallback: download PNG then show instruction
        await handleDownload();
        setInstagramToast(true);
        setTimeout(() => setInstagramToast(false), 4000);
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(currentUrl);
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
        } catch (error) {
            console.error("Error copying link:", error);
        }
    };

    // Scaled dimensions for the preview container
    const scaledWidth = CARD_WIDTH * previewScale;
    const scaledHeight = CARD_HEIGHT * previewScale;

    const primaryType = pokemon.types[0]?.type.name || "normal";
    const typeColor = getTypeColor(primaryType);

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-lg flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="bg-neutral-950 rounded-2xl shadow-2xl border border-neutral-800"
                onClick={(e) => e.stopPropagation()}
                style={{ width: "min(640px, 96vw)", maxHeight: "96vh", overflowY: "auto" }}
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-800">
                    <div>
                        <h2 className="font-bold text-lg sm:text-xl text-white">{capitalizedName} Card</h2>
                        <p className="text-neutral-500 text-xs font-mono mt-0.5">Download or share as image</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white"
                        aria-label="Close modal"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Card Preview */}
                <div className="px-4 py-3 flex justify-center" style={{ background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 70%)" }}>
                    <div
                        style={{
                            width: `${scaledWidth}px`,
                            height: `${scaledHeight}px`,
                            overflow: "hidden",
                            borderRadius: "4px",
                            boxShadow: `0 8px 40px ${typeColor}25, 0 0 0 1px rgba(255,255,255,0.05)`,
                        }}
                    >
                        <div
                            style={{
                                transform: `scale(${previewScale})`,
                                transformOrigin: "top left",
                            }}
                        >
                            <PokemonCardUI pokemon={pokemon} stats={finalStats} bst={bst} />
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="px-5 pb-3 flex gap-2.5">
                    <button
                        onClick={handleDownload}
                        disabled={downloading}
                        className="flex-1 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 hover:brightness-110 active:scale-[0.98]"
                        style={{ background: `linear-gradient(135deg, ${typeColor}, ${typeColor}cc)` }}
                    >
                        <Download size={16} />
                        {downloading ? "SAVING..." : "SAVE PNG"}
                    </button>
                    <button
                        onClick={handleCopyToClipboard}
                        className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-bold text-xs sm:text-sm px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border border-neutral-700 active:scale-[0.98]"
                    >
                        {copied ? (
                            <>
                                <Check size={16} className="text-emerald-400" />
                                <span className="text-emerald-400">COPIED!</span>
                            </>
                        ) : (
                            <>
                                <Copy size={16} />
                                COPY IMAGE
                            </>
                        )}
                    </button>
                </div>

                {/* Social Sharing Section */}
                <div className="px-5 pb-4 pt-3 border-t border-neutral-800">
                    <h3 className="font-mono text-[10px] sm:text-xs text-neutral-500 mb-3 text-center uppercase tracking-widest">
                        Share to
                    </h3>
                    <div className="flex justify-center gap-2.5">
                        {/* Twitter/X */}
                        <button
                            onClick={shareToTwitter}
                            className="h-11 w-11 bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 hover:scale-110 transition-all rounded-xl border border-neutral-800"
                            aria-label="Share on X (Twitter)"
                            title="Share on X"
                        >
                            <Twitter size={18} className="text-white" />
                        </button>

                        {/* Facebook */}
                        <button
                            onClick={shareToFacebook}
                            className="h-11 w-11 bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 hover:scale-110 transition-all rounded-xl border border-neutral-800"
                            aria-label="Share on Facebook"
                            title="Share on Facebook"
                        >
                            <Facebook size={18} className="text-white" />
                        </button>

                        {/* Reddit */}
                        <button
                            onClick={shareToReddit}
                            className="h-11 w-11 bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 hover:scale-110 transition-all rounded-xl border border-neutral-800"
                            aria-label="Share on Reddit"
                            title="Share on Reddit"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-white">
                                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                            </svg>
                        </button>

                        {/* Instagram */}
                        <button
                            onClick={handleInstagramShare}
                            className="h-11 w-11 bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 hover:scale-110 transition-all rounded-xl border border-neutral-800"
                            aria-label="Save for Instagram"
                            title="Save for Instagram"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] text-white">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </button>

                        {/* Copy Link */}
                        <button
                            onClick={handleCopyLink}
                            className="h-11 w-11 bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 hover:scale-110 transition-all rounded-xl border border-neutral-800"
                            aria-label="Copy link"
                            title="Copy link"
                        >
                            {linkCopied ? (
                                <Check size={18} className="text-emerald-400" />
                            ) : (
                                <Link size={18} className="text-white" />
                            )}
                        </button>
                    </div>

                    {instagramToast && (
                        <div className="mt-3 bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs font-mono py-3 px-4 rounded-lg text-center leading-relaxed">
                            📥 Card saved to your device!<br />
                            <span className="text-neutral-400">Open Instagram → + New Post → select the saved image</span>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
}
