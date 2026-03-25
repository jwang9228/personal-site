import Techstack from './components/Techstack';
import Title from './components/Title';

export const metadata = {
  title: 'Developer | Justin Wang',
  description: "Justin Wang's developer portfolio landing page"
};

export default function Page() {
  return (
    <>
      <Title />
      <Techstack />
    </>
  );
};
