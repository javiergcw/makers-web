// Aquí deberías importar e incluir tu landing real, por ejemplo:
import Navbar from "../components/navbar";
import WhoWeAreSection from "../components/who_we_are_section";
import CoreValuesSection from "../components/core_values_section";
import TeamTestimonialsSection from "../components/team_testimonials_section";
import LeadershipTeamSection from "../components/leadership_team_section";
import JoinTeamFooterSection from "../components/join_team_footer_section";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhoWeAreSection />
      <CoreValuesSection />
      <TeamTestimonialsSection />
      <LeadershipTeamSection />
      <JoinTeamFooterSection />
    </>
  );
}
