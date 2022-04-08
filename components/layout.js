import Navigation from "./navigation";

export default function Layout({ children, options }) {
  return (
    <>
      <Navigation options={options} />
      <main>{children}</main>
    </>
  );
}
