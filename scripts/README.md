Esse projeto foi feito com o intuito de aprender um pouco mais sobre algumas funções do python que interagem com o sistema operacional

um resumo do que o script fazia

isso, fazia. O script foi feito para ser executado de forma externa(muito dificílmente seria reconhecido pelo VAC, já que não modificava os arquivos do jogo, apenas lia)<br>
hoje em dia não funciona mais, pois as FLAGS, HEALTH, FORCE_JUM, etc.. sempre mudam de versão para versão, e também porque o jogo já foi atualizado para seu sucessor

Bibliotecas usadas:
pymem: usada para ler e escrever na memória de outros processos (nesse caso, do csgo.exe).

win32api: usada para detectar teclas pressionadas.

time: para controlar o tempo/sleep.

Variáveis principais:
LOCAL_PLAYER: offset (posição na memória) que aponta para o jogador controlado pelo usuário.

FORCE_JUMP: offset que força o jogador a pular no jogo.

HEALTH e FLAGS: offsets para informações sobre a vida do jogador e o estado dele (por exemplo, se ele está no chão ou no ar).

O que a função bhop() faz:
Conecta ao processo csgo.exe usando pymem.

Procura o módulo client.dll, que é onde ficam esses valores de jogo.

Em loop infinito:

Espera 0.01 segundos para não travar o jogo.

Verifica se a tecla ESPAÇO (0x20) está pressionada.

Lê o ponteiro para o jogador local na memória.

Se o jogador não estiver morto (HEALTH diferente de 0).

Verifica se o jogador está no chão (FLAGS & (1 << 0) — bit 0 indica se está no chão).

Escreve na memória para forçar o personagem a pular automaticamente (FORCE_JUMP com valores 6 e depois 4).

Em resumo: Se você segura ESPAÇO, o script automaticamente pula assim que o seu personagem encosta no chão

# OS ORGÃOS DA SAÚDE ADVERTEM : NÃO USEM CHEAT EM JOGUINHO ONLINE, É FEIO E NINGUÉM ACHA MANEIRO

Se você segura ESPAÇO, o script automaticamente pula assim que o seu personagem encosta no chão, facilitando bunny hopping. 
