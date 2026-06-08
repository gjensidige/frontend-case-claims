import "./App.css";
// import exampleData from '../../api/example-response.json';

function App() {
	return (
		<div className="app text-style-body">
			<header className="app__header">
				<img
					className="app__logo"
					src="/logo.svg"
					alt="Gjensidige logo"
					aria-hidden="true"
				/>
				<h1 className="text-style-title1">Mine skader</h1>
			</header>

			<main className="app__main">
				<div className="app__welcome">
					<h2 className="text-style-title2">
						Velkommen til parprogrammeringsøkta! 👋
					</h2>
					<p className="text-style-body">
						Vi skal sammen bygge en oversikt over kundeskader. Ta en titt i{" "}
						<code>backlog.json</code>
						og velg en eller flere oppgaver som virker interessante!
					</p>

					<div className="app__tips">
						<h3 className="text-style-headline">Tips for å komme i gang:</h3>
						<ul>
							<li>
								📁 Skadedata finner du i{" "}
								<code>src/api/example-response.json</code>
							</li>
							<li>
								🎨 Design tokens ligger i <code>src/styles/</code>
							</li>
							<li>💭 Tenk høyt – vi ønsker å høre hvordan du resonnerer!</li>
							<li>❓ Still spørsmål underveis – dette er et samarbeid</li>
							<li>🚀 Start enkelt og bygg videre fra der</li>
						</ul>
					</div>

					<div className="app__info">
						<p className="text-style-callout">
							<strong>Husk:</strong> Det er ingen fasit, og du trenger ikke være
							ferdig. Vi er mest interessert i å se hvordan du tenker,
							kommuniserer og jobber!
						</p>
					</div>
				</div>
			</main>

			<footer className="app__footer">
				<span className="text-style-footnote">Laget med ❤️ av Gjensidige</span>
			</footer>
		</div>
	);
}

export default App;
