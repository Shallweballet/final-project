// src/components/layout/SideDecor.jsx
export default function SideDecor({ side = "left" }) {
  return (
    <aside
      className={`side-decor side-decor--${side}`}
      aria-hidden="true"
    />
  );
}