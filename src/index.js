function nullPropagation(accessor, defaultValue) {
  try {
    return accessor()
  } catch (error) {
    if (error instanceof TypeError) {
      if (typeof defaultValue !== 'undefined') {
        return defaultValue;
      }
      return;
    }
    throw error
  }
}

export default nullPropagation
