import ProjectCard from "@/components/ui/ProjectCard";
import type { ProjectProps } from "@/components/ui/ProjectCard";
import { Shield, Bot, Search, Cloud } from "lucide-react";

function Project() {
	const Projects: ProjectProps[] = [
		{
			name: "LinkForge",
			about: "A web application for creating and managing links, designed to provide a simple and efficient link-sharing experience.",
			features: [
				{
					name: "Link Management",
					about: "Create and manage links through a streamlined interface.",
					icon: Search,
				},
				{
					name: "Responsive UI",
					about: "A clean interface designed for different screen sizes.",
					icon: Cloud,
				},
			],
			tags: ["React", "TypeScript", "Tailwind CSS"],
			code: "https://github.com/AkioAtom/LinkForge",
		},
		{
			name: "Mystery Message",
			about: "An anonymous messaging application that allows users to receive messages while maintaining their privacy.",
			features: [
				{
					name: "Authentication",
					about: "Secure login and signup functionality for users.",
					icon: Shield,
				},
				{
					name: "Anonymous Messaging",
					about: "Receive messages without revealing the sender's identity.",
					icon: Bot,
				},
			],
			tags: ["React", "TypeScript", "Tailwind CSS"],
			code: "https://github.com/AkioAtom/Mystery_Msg",
		},
		{
			name: "CollabSphere",
			about: "A collaboration platform for developers to discover teammates, share ideas, and work together on projects.",
			features: [
				{
					name: "Project Matching",
					about: "Discover potential teammates based on shared interests and skills.",
					icon: Search,
				},
				{
					name: "Collaboration",
					about: "Support teamwork and project coordination in one place.",
					icon: Cloud,
				},
			],
			tags: ["Next.js", "MongoDB", "Tailwind CSS", "Socket.io"],
			code: "https://github.com/AkioAtom/CollabSphere",
		},
	];

	return (
		<section
			id="projects"
			className="relative min-h-full my-37.5 z-10 px-4 sm:px-8 md:px-16 lg:px-62.5 py-12 sm:py-16 md:py-20 lg:py-25 flex flex-col gap-12 md:gap-16 lg:gap-24 mx-5 rounded-t-4xl"
		>
			{/* Heading */}
			<div className="w-3xs relative inline-block px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6">
				<span className="absolute top-0 right-0 w-3 sm:w-4 h-3 sm:h-4 border-t-2 border-r-2 border-white" />
				<span className="absolute bottom-0 left-0 w-3 sm:w-4 h-3 sm:h-4 border-b-2 border-l-2 border-white" />

				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-[Doto]">
					Projects
				</h2>
			</div>

			{/* Projects */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{Projects.map((project) => (
					<ProjectCard key={project.name} project={project} />
				))}
			</div>
		</section>
	);
}

export default Project;
