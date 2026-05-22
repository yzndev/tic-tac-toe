export  function modeButtonClass(active) {
  return `
    flex-1 rounded-lg py-2 transition
    ${active
      ? "bg-teal-500 text-white shadow"
      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-100"
    }
  `
}