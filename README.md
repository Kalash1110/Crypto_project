# Crypto_project
ABSTRACT:- 

This is an implementation of a research paper named as "Design of Hybrid Cryptography System based on Vigenere Cipher and Polybius Cipher". The link of the paper is :- https://ieeexplore.ieee.org/document/9199997 .
The paper addresses the problem of weak encryption techniques due to the use of classical encryption techniques as in we have the Vigenère cipher and Polybius cipher for instance. Even though Vigenère
cipher handles the frequency analysis problem quite well but due to its nature of repeating keys, if during cryptanalysis, we are able to find the length of the key using kasiski’s examination or Friedmann's
test then, after knowing the length we can do the frequency analysis and break the cipher.

Similarly, the Polybius square is quite insecure by modern standards, as it is a substitution cipher with characters being substituted for pairs of digits, which is easily broken through frequency analysis.Thus, this paper discusses about implementing a hybrid cryptography system which is based on the mixture of two classical ciphers namely Vigenère and Polybius. The encryption as well as decryption is
done in two phases. We encrypt the plaintext using the Vigenère cipher in phase 1 which utilizes the Vigenère square table using a chosen key by both sender and receiver and later the cipher generated in
phase 1 is again encrypted using the Polybius square table in phase 2.

Note that even the Vigenère cipher itself alone results as a distributed, jumbled and unformatted alphabets which is also secured but again passing the cipher forward and treating Vigenère outputs as Polybius input resulting in numerical format final cipher makes it more secure and complex than use of single ciphers. Decryption is done by
reversing the encrypted process by going through Polybius cipher decryption in phase 1 and then again decrypting the resulted output by Vigenère Square table in phase 2.
This is basically an upgraded variant as a hybrid that is a lot more secure against attacks like active, passive, Kasiski, Friedmann assaults and frequency analysis.

This altered hybrid combination of the Polybius and Vigenère Cipherresults in a high level of complexity, scattering, distribution, and confusion in the algorithm that creates them making it an exceptionally solid cipher and hard to break. The brute
force attacks, cryptanalysis, frequency analysisis likewise troublesome because of utilization of product tables for encryption. Even though, the hybrid cipher is secure but still this space requires genuine
research and it requires more execution and checks on security attacks and performance analysis on messages.

IMPLEMENTATION:-

I have implemented it using simple HTMl,CSS and JS.The entire encryption and decryption code is written in javascript.Here,in phase 1 we encrypt using vigenere and then use polybius in phase 2 and while decryption do the reverse i.e use polybius first and then vigenere.
The code is very simple and structured.This project is under the course "Number Theory & Cryptography" related with degree of Mtech (CSIS) 1st year at NIT,Karnataka,Surathkal.For any query regarding this project and paper,you can mail me at kalashjha1110@gmail.com
