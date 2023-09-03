export function validateEmail(email: string) {
    if(email.length === 0){
        return "Veuillez entrez une adresse email";
    }
    if (email.length < 10) {
      return "Cette adresse email est invalide";
    }
  }
  
export function validateName(name: string) {
    if(name.length === 0){
        return "Veuillez entrez votre nom";
    }
    if (name.length < 3) {
      return "Votre nom doit avoir au moins 3 caractères";
    }
}

export function validateContent(content: string) {
    if(content.length === 0){
        return "Veuillez entrez un message";
    }
    if (content.length < 10) {
      return "Un message doit contenir au moins 10 caractères";
    }
  }
  
export function validatePhone(phone: string) {
    const str = phone.replace(/\s/g,"")
    const phoneNumber = Number(str)
    const regex = new RegExp(/^6\d{8}$/)
    if (!regex.test(String(phoneNumber))) {
      return "Le numéro de téléphone est invalide";
    }
  }