class Conta {
    constructor ( nomeCorrentista, banco, numeroConta, saldo ) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    getNomeCorrentista() {
        return this.nomeCorrentista;
    }

    setNomeCorrentista( nome ) {
        this.nomeCorrentista = nome;
    }

    getBanco() {
        return this.banco;
    }

    setBanco( banco ) {
        this.banco = banco;
    }

    getNumeroConta() {
        return this.numeroConta;
    }

    setNumeroConta( numeroConta ) {
        this.numeroConta = numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo( saldo ) {
        this.saldo = saldo;
    }

    depositar( valor ) {
        this.saldo += valor;
    }

    sacar( valor ) {
        if ( valor <= this.saldo ) {
            this.saldo -= valor;
        } else {
            console.error( "Saldo insuficiente!" );
        }
    }
}

class Corrente extends Conta {
    constructor ( nomeCorrentista, banco, numeroConta, saldo, saldoEspecial ) {
        super( nomeCorrentista, banco, numeroConta, saldo );
        this.saldoEspecial = saldoEspecial;
    }

    getSaldoEspecial() {
        return this.saldoEspecial;
    }

    setSaldoEspecial( saldoEspecial ) {
        this.saldoEspecial = saldoEspecial;
    }

    sacar( valor ) {
        if ( valor <= this.saldo + this.saldoEspecial ) {
            this.saldo -= valor;
            if ( this.saldo < 0 ) {
                this.saldoEspecial += this.saldo;
                this.saldo = 0;
            }
        } else {
            console.error( "Saldo e limite especial insuficientes!" );
        }
    }
}

class Poupanca extends Conta {
    constructor ( nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento ) {
        super( nomeCorrentista, banco, numeroConta, saldo );
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    getJuros() {
        return this.juros;
    }

    setJuros( juros ) {
        this.juros = juros;
    }

    getDataVencimento() {
        return this.dataVencimento;
    }

    setDataVencimento( dataVencimento ) {
        this.dataVencimento = dataVencimento;
    }

    calcularJuros() {
        if ( new Date() > this.dataVencimento ) {
            let jurosCalculados = this.saldo * ( this.juros / 100 );
            this.saldo += jurosCalculados;
            this.dataVencimento.setMonth( this.dataVencimento.getMonth() + 1 );
        }
    }
}

alert( "Bem-vindo ao sistema de gerenciamento de contas!" );

let contaCorrente = new Corrente();
contaCorrente.setNomeCorrentista( prompt( "Nome do correntista (corrente):" ) );
contaCorrente.setBanco( prompt( "Banco (corrente):" ) );
contaCorrente.setNumeroConta( prompt( "Número da conta (corrente):" ) );
contaCorrente.setSaldo( parseFloat( prompt( "Saldo inicial (corrente):" ) ) );
contaCorrente.setSaldoEspecial( parseFloat( prompt( "Limite especial (corrente):" ) ) );
alert( "Conta corrente criada com sucesso!" );

let contaPoupanca = new Poupanca();
contaPoupanca.setNomeCorrentista( prompt( "Nome do correntista (poupança):" ) );
contaPoupanca.setBanco( prompt( "Banco (poupança):" ) );
contaPoupanca.setNumeroConta( prompt( "Número da conta (poupança):" ) );
contaPoupanca.setSaldo( parseFloat( prompt( "Saldo inicial (poupança):" ) ) );
contaPoupanca.setJuros( parseFloat( prompt( "Juros mensais (poupança):" ) ) );
contaPoupanca.setDataVencimento( new Date( prompt( "Data de vencimento (poupança - formato AAAA-MM-DD):" ) ) );
alert( "Conta poupança criada com sucesso!" );

alert(
    "Dados da Conta Corrente:\n" +
    "Nome: " + contaCorrente.getNomeCorrentista() + "\n" +
    "Banco: " + contaCorrente.getBanco() + "\n" +
    "Número da Conta: " + contaCorrente.getNumeroConta() + "\n" +
    "Saldo: " + contaCorrente.getSaldo() + "\n" +
    "Saldo Especial: " + contaCorrente.getSaldoEspecial()
);

alert(
    "Dados da Conta Poupança:\n" +
    "Nome: " + contaPoupanca.getNomeCorrentista() + "\n" +
    "Banco: " + contaPoupanca.getBanco() + "\n" +
    "Número da Conta: " + contaPoupanca.getNumeroConta() + "\n" +
    "Saldo: " + contaPoupanca.getSaldo() + "\n" +
    "Juros: " + contaPoupanca.getJuros() + "%\n" +
    "Data de Vencimento: " + contaPoupanca.getDataVencimento().toLocaleDateString()
);
