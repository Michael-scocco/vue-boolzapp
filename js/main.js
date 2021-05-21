
new Vue({
    // ELEMENTO //
    el : '#app',
  
    // DATI //
    data : {
      // Lista contatti-chat
      contacts: [
        {
          name: 'Ottavio',
          avatar: '_1',
          visible: true,
          messages: [
            {
              date: '04/02/2021 10:30:55',
              text: 'A che ora finisce la lezione?',
              status: 'sent'
            },
            {
              date: '04/02/2021 10:34:00',
              text: 'MAI!',
              status: 'received'
            },
            {
              date: '04/02/2021 10:35:00',
              text: 'La lezione è in loop, perchè ho sbagliato a scrivere il ciclo',
              status: 'received'
            }
          ],
        },
        {
          name: 'Zuckerberg',
          avatar: '_2',
          visible: true,
          messages: [
            {
              date: '03/02/2021 15:50:00',
              text: 'Ti piace la nuova versione di Facebook?',
              status: 'received'
            },
            {
              date: '03/02/2021 15:55:00',
              text: 'Senti, è la quarantesima volta che me lo chiedi.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Freddie Mercury',
          avatar: '_3',
          visible: true,
          messages: [
            {
              date: '03/02/2021 09:50:00',
              text: 'I want to ride my bicycle =(',
              status: 'received'
            },
            {
              date: '03/02/2021 14:30:35',
              text: 'La bicycle è ancora in assistenza, purtroppo',
              status: 'sent'
            },
          ],
        },
        {
          name: 'Clark Kent',
          avatar: '_4',
          visible: true,
          messages: [
            {
              date: '02/02/2021 20:50:00',
              text: 'Ho dimenticato gli occhiali a casa',
              status: 'received'
            },
            {
              date: '02/02/2021 21:00:15',
              text: 'Superman!??? Ma dove è andato Clark?',
              status: 'sent'
            },
          ],
        },
        {
          name: 'Michele',
          avatar: '_5',
          visible: true,
          messages: [
            {
              date: '02/02/2021 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '02/02/2021 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              date: '02/02/2021 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_6',
          visible: true,
          messages: [
            {
              date: '01/02/2021 16:30:00',
              text: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '01/02/2021 16:30:55',
              text: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '01/02/2021 16:35:00',
              text: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_7',
          visible: true,
          messages: [
            {
              date: '01/02/2021 10:10:40',
              text: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '01/02/2021 10:20:10',
              text: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '01/02/2021 16:15:22',
              text: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Luisa',
          avatar: '_8',
          visible: true,
          messages: [
            {
              date: '01/02/2021 15:30:55',
              text: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '01/02/2021 15:50:00',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        }
      ],
    });