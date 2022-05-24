// https://v1.tailwindcss.com/components/navigation
const Navigation = () => (
  <nav class="flex items-center flex-wrap bg-white p-4 border-b shadow-md sticky top-0">
    <div class="flex items-center gap-3">
      <svg class="w-8 h-8" viewBox="0 0 314 314" fill="none">
        <circle cx="157" cy="157" r="157" fill="#B33433" />
        <path
          d="M314 157C314 243.709 243.709 314 157 314C70.2913 314 0 243.709 0 157C134.855 157 73.9567 157 160.665 157C247.374 157 175.021 157 314 157Z"
          fill="white"
        />
        <rect y="153.64" width="314" height="20.1595" fill="#202020" />
        <circle cx="157" cy="163.72" r="69.3366" fill="#202020" />
        <circle cx="157" cy="163.72" r="44.5953" fill="white" />
      </svg>

      <h1 class="font-semibold text-2xl tracking-tight">Pokédex</h1>
    </div>
  </nav>
);

export default Navigation;
