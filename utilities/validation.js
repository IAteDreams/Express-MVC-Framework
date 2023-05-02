class Validation{
    
    isEmpty(input){
        if(!input){
            return true;
        }
        return false;
    }

    isEmail(email){
        if(!email || email.length == 255){
            return false;
        }
        else{
            const [username, domain] = email.split('@');
            if (!username || !domain){ 
                return false;
            }

            if(username.length > 64 || domain.length > 255){
                return false;
            }

            const domainParts = domain.split('.');
            for (let part of domainParts){
                if (part.length > 63 || part.length < 2){ 
                    return false;
                }
            }
            return true;
        }
    }

    isMinLength(input,length){
        if(typeof length === 'string' && !length.isNaN()){
            return false;
        }
        const size = Number(length);
        if(input.length < size){
            return false
        }
        return true;
    }

    isMaxLength(input,length){
        if(!length.isInteger()){
            return false;
        }
        const size = Number(length);
        if(input.length > size){
            return false
        }
        return true;
    }

    isMatch(word1,word2){
        if(word1 !== word2){
            return false;
        }
        return true;
    }

    sanitizeInput(input){
        return input
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
          .replace(/\//g, '&#x2F;');
    }
}

module.exports = new Validation;