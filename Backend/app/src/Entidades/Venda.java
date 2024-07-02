package Entidades;

import java.math.BigDecimal;
import java.time.LocalDate;

public class Venda {
    private String cliente;
    private LocalDate data;
    private String status;
    private BigDecimal valor;
    
    public String getcliente(){
        return cliente;
    }
    public LocalDate getdata(){
        return data;
    }
    public String getstatus(){
        return status;
    }
    public BigDecimal getvalor(){
        return valor;
    }
}
