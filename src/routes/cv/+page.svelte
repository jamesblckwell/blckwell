<script lang="ts">
	import Education from '$components/education.svelte';
	import Experience from '$components/experience.svelte';
	import Skill from '$components/skill.svelte';
	import DeviconPlainLinkedin from '~icons/devicon-plain/linkedin';
	import { phone, email, socials } from '$stores/store';
</script>

<div class="max-w-screen-lg xl:mx-auto pt-8 mx-8 pb-8">
	<h1 class="text-6xl mb-8">James Blackwell</h1>
	<div class="flex gap-8 mb-8 flex-col-reverse md:flex-row">
		<div class="md:w-1/2">
			<p class="text-lg">
				An adaptable, motivated and reliable worker with four years of experience in some of the top
				marketing agencies as a Front-end Developer. And the assistant manager of a local
				independent cinema with <a
					class="underline"
					target="_blank"
					href="https://www.tripadvisor.co.uk/Attraction_Review-g186422-d2534653-Reviews-The_Regal_Cinema-Evesham_Worcestershire_England.html"
					>1000s of positive reviews</a
				>. Currently studying for a PMQ, and looking to leverage my technical and personable skills
				into your team.
			</p>
		</div>
		<div class="md:w-1/2 text-lg">
			<div class="flex items-center mb-4">
				<p class="mr-4 text-4xl text-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
						><path
							d="M12 0c-4.198 0-8 3.403-8 7.602 0 6.243 6.377 6.903 8 16.398 1.623-9.495 8-10.155 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.342-3 3-3 3 1.343 3 3-1.343 3-3 3z"
						/></svg
					>
				</p>
				<p class="mr-24">Glassworks Court, Grenan Square, Greenford UB6&nbsp;0FP</p>
			</div>
			<div class="flex my-2 items-center mb-4">
				<p class="mr-4 text-4xl text-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
						><path
							d="M20 2c0-1.105-.896-2-2-2h-12c-1.105 0-2 .896-2 2v20c0 1.104.895 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.501 0h3.001c.276 0 .5.224.5.5s-.224.5-.5.5h-3.001c-.275 0-.499-.224-.499-.5s.224-.5.499-.5zm1.501 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm6-3h-12v-14.024h12v14.024z"
						/></svg
					>
				</p>
				<p><a href="tel:{$phone}">{$phone}</a></p>
			</div>
			<div class="flex my-2 items-center mb-4">
				<p class="mr-4 text-4xl text-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
						><path
							d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z"
						/></svg
					>
				</p>
				<p><a href="mailto:{$email}">{$email}</a></p>
			</div>
			<div class="flex my-2 items-center">
				<p class="mr-4 text-4xl text-center"><DeviconPlainLinkedin /></p>
				<p><a target="_blank" href={$socials.linkedin}>jamesblckwell</a></p>
			</div>
		</div>
	</div>
	<div class="flex gap-8 md:flex-row flex-col">
		<div class="md:w-1/2">
			<h2 class="text-3xl mb-4">Experience</h2>
			<div class="">
				<Experience
					title="Assistant Manager"
					company="The Regal Cinema Evesham"
					startDate="Sep 2023"
					endDate="Jun 2024"
					duration="(8 months)"
					responsibilities={[
						'Managed a team of 10+ staff members across two sites',
						'Responsible for all parts of the customer experience',
						'Trained new members of staff',
						'Dealt with staff sickness and other rota issues',
						'Created digital marketing media for use on social media',
						'Dealt with customer complaints and issues swiftly and effectively'
					]}
				/>
				<Experience
					title="Frontend Developer"
					company="Havas CX Helia"
					startDate="Nov 2021"
					endDate="May 2023"
					duration="(1 year 7 months)"
					responsibilities={[
						'Participated in every step of the development process from planning to deployment',
						'Created valuable experiences for customers of clients including Great Western Railway, Diageo and Pets at Home',
						'Spearheaded a switch to developing using Svelte',
						'Tied together Svelte and CRM systems such as Salesforce',
						'Implemented CI/CD processes into workflow',
						'Dabbled in threeJS'
					]}
				/>

				<Experience
					title="Junior Web Developer"
					company="Liquorice"
					startDate="Mar 2019"
					endDate="May 2021"
					duration="(2 years 3 months)"
					responsibilities={[
						'Supported clients such as OneStop and Alliance Pharmaceuticals by planning, developing and maintaining their global websites',
						'Key voice in scoping and planning meetings',
						'Became the subject matter expert on Hubspot',
						'Used numerous technologies including: C-Panel, Wordpress and AWS',
						'Developed in PHP and JS'
					]}
				/>
			</div>
		</div>
		<div class="md:w-1/2">
			<h2 class="text-3xl mb-4">Education</h2>
			<Education
				title="APM Project Management Qualification"
				startDate="Jul 2024"
				endDate="On-going"
			>
				Currently studying for the APM PMQ, a qualification in project management. From the <a
					href="https://www.apm.org.uk/qualifications-and-training/project-management-qualification/"
					target="_blank"
					class="underline"
					>APM website
				</a>:
				<q class="block p-4 mt-4 bg-gray-100 rounded-lg italic">
					The APM Project Management Qualification (SQCF Level 7) is a qualification aimed at
					project professionals who are looking to demonstrate their knowledge and understanding of
					all key areas of project management.
				</q>
			</Education>
			<Education
				title="Level 3, Computer Software Engineering"
				startDate="Mar 2019"
				endDate="May 2021"
			>
				Higher apprenticeship in Software Development granted by the Institute for Apprenticeships
				and Technical Education completed with Liquorice Marketing.
			</Education>
			<h2 class="text-3xl mb-4">Skills</h2>
			<ol class="flex flex-row gap-4 gap-y-4 flex-wrap">
				<Skill>Management</Skill>
				<Skill>Customer Service</Skill>
				<Skill>Training</Skill>
				<Skill>Marketing</Skill>
				<Skill>Mentoring</Skill>
				<Skill>Sales</Skill>
				<Skill>Bilingual English/French</Skill>
				<Skill>JavaScript</Skill>
				<Skill>React</Skill>
				<Skill>Svelte</Skill>
				<Skill>TypeScript</Skill>
				<Skill>MySQL</Skill>
				<Skill>User Experience (UX)</Skill>
				<Skill>User Interface</Skill>
				<Skill>Wordpress</Skill>
				<Skill>Salesforce</Skill>
				<Skill>Hubspot</Skill>
				<Skill>REST APIs</Skill>
				<Skill>Webpack</Skill>
				<Skill>Jira</Skill>
				<Skill>PHP</Skill>
			</ol>
		</div>
	</div>
</div>
