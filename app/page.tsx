type Props = {
  title: string;
};

const Component = ({ title }: Props) => {
  return <h1>{title}</h1>;
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
      <Component title="Hello World" />
    </main>
  );
}
