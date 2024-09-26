const phoneValidation = ({formData, phoneFormats}) => {
  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const prefix = formData.phonePrefix;

    let formatted = "";

    if (phoneFormats[prefix]) {
      const parts = phoneFormats[prefix].source.split("\\d{");

      let currentIndex = 0;

      for (let i = 1; i < parts.length; i++) {
        const partLength = parseInt(parts[i]);
        if (cleaned.length > currentIndex) {
          formatted += cleaned.slice(currentIndex, currentIndex + partLength);
          currentIndex += partLength;
        }

        if (i < parts.length - 1) {
          formatted += " ";
        }
      }
    }

    return formatted.trim();
  };
  return { formatPhoneNumber };
};

export default phoneValidation;
