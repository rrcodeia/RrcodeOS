import pandas as pd
import sys
import os

def analisar_dados(caminho_arquivo):
    if not os.path.exists(caminho_arquivo):
        print(f"Erro: Arquivo {caminho_arquivo} não encontrado.")
        return

    try:
        if caminho_arquivo.endswith('.csv'):
            df = pd.read_csv(caminho_arquivo)
        elif caminho_arquivo.endswith('.xlsx'):
            df = pd.read_excel(caminho_arquivo)
        else:
            print("Formato não suportado. Use CSV ou XLSX.")
            return

        print("=== RESUMO EXECUTIVO DOS DADOS ===")
        print(f"Total de Linhas: {len(df)}")
        print(f"Total de Colunas: {len(df.columns)}")
        print("\nColunas e Tipos:")
        for col, dtype in df.dtypes.items():
            print(f"- {col}: {dtype}")
        
        print("\nValores Ausentes por Coluna:")
        print(df.isnull().sum())
        
        print("\nAmostra dos 5 primeiros registros:")
        print(df.head())
        
    except Exception as e:
        print(f"Erro ao analisar arquivo: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Uso: python analisa_csv.py <caminho_para_arquivo>")
    else:
        analisar_dados(sys.argv[1])
