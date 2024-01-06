#%% [markdown]
# # Find the spark home
import findspark
findspark.init('C:\\Users\\Timkong\\Documents\\kongyiuchong\\spark-3.0.1-bin-hadoop3.2')
# findspark.init('/mnt/c/Users/User/Documents/kongyiuchong/spark-3.0.1-bin-hadoop3.2')

# # Create SparkSession
from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("Read Stream from kafka").getOrCreate()


# # ReadStream from Kafka
dfStream = spark.readStream.format('kafka')\
     .option('kafka.bootstrap.servers','localhost:9092')\
     .option('subscribe','student').load()



# # Make a schema for incoming data
from pyspark.sql.types import StringType, IntegerType, StructType, StructField
schema = StructType([ 
     StructField('displayname', StringType()),
     StructField('height', IntegerType()),
     StructField('weight', IntegerType()),
     StructField('gender', StringType()),
     StructField('age', IntegerType()),
     StructField('created_at', StringType()),
     StructField('goal', StringType()),
     StructField('frequency', StringType()),
     StructField('focus', StringType()),
     StructField('email', StringType())
])



# query = dfStream.writeStream.format('console').start()
# query.awaitTermination();


# they are not string originally, they are bytes? so cast to string
from pyspark.sql import functions as F
dfStream = dfStream.select(F.from_json(dfStream['value'].cast('string'),schema).alias('student'))
dfStream_with_schema = dfStream.selectExpr(
     "student.displayname",
     "student.height",
     "student.weight",
     "student.age",
     "student.gender",
     "student.created_at",
     "student.goal",
     "student.frequency",
     "student.focus",
     "student.email"
     )


db_config = {
    "url":"jdbc:postgresql://localhost:5434/dw_homegym",
    "user":"postgres",
    "password":"123",
    "driver" :"org.postgresql.Driver"
}


# # Start the stream and WriteStream to Jupyter(console)
# the stream will not start if you don't run this cell
def transform_df(df, epoch_id):
     df.show()
     df.write.format('jdbc').options(**db_config).option('dbtable','staging_student').mode('append').save()
     

 
# query = dfStream_with_schema.writeStream.format('console').start()
query = dfStream_with_schema.writeStream.foreachBatch(transform_df).start()
query.awaitTermination();


# %% [markdown]
# # Stop the streaming
query.stop()