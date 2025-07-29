import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "../navbar";
import JoinTeamFooterSection from "../join_team_footer_section";
import theme from "../utils/theme";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
                <Navbar />
                <main>{children}</main>
            <JoinTeamFooterSection />
        </ThemeProvider>
    );
}
