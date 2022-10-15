const useColor = () => {
  const colors = ['bg-pink-300', 'bg-yellow-300', 'bg-green-300', 'bg-red-300']
  const getColor = (index) => colors[index % colors.length]
  return { getColor }
}

export default useColor
